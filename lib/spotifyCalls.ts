import { spotifyGet } from "./utils";
import {
  SpotifyAlbum,
  SpotifyArtist,
  SpotifyTrack
} from '@/types/types'
import { Session } from "next-auth";

export async function getTopTracks(
  term: string,
  session: Session
): Promise<Array<SpotifyTrack>>{
  const url: string = `https://api.spotify.com/v1/me/top/tracks?time_range=${term}&offset=0`
  return spotifyGet(url,session).then(data => data?.items)
}

export async function getTopArtists(
  term: string,
  session: Session
): Promise<Array<SpotifyArtist>>{
  const url: string = `https://api.spotify.com/v1/me/top/artists?time_range=${term}&offset=0`
  return spotifyGet(url,session).then(data => data?.items)
}

export async function getRecentlyPlayed(
  session: Session
): Promise<Array<SpotifyTrack>>{
  const url: string = `https://api.spotify.com/v1/me/player/recently-played?limit=50`
  return spotifyGet(url,session).then(data => data.items?.map((item: {track: SpotifyTrack})=> item.track))
}

export async function getNewReleases(
  session: Session
): Promise<Array<SpotifyAlbum>>{
  const url: string = "https://api.spotify.com/v1/browse/new-releases?limit=20"
  return spotifyGet(url,session).then(data => data.albums?.items)
}

async function getAlbumsFromArtistSearch(
  search: string,
  session: Session
): Promise<Array<SpotifyAlbum>>{
  const url: string = `https://api.spotify.com/v1/artists/${search}/albums?include_groups=single%2C+album%2C+appears_on&limit=5&offset=0`
  return spotifyGet(url,session).then(data => data?.items)
}

async function getArtistsFromUser(
  session: Session
): Promise<Array<SpotifyArtist>>{
  const url: string = `https://api.spotify.com/v1/me/following?type=artist&limit=50`
  return spotifyGet(url,session).then(data => data?.artists?.items)
}

export async function getRecentReleases(artistIds: Array<SpotifyArtist>, session: Session) {
  const customPastDate = new Date();
  customPastDate.setDate(customPastDate.getDate() - 14); // New Releases in the past 14 days

  const requests = artistIds.map(artistId => getAlbumsFromArtistSearch(artistId.id, session));

  try {
    const responses = await Promise.allSettled(requests); // Wait for all API calls to complete

    // Extract and filter recent releases
    const allRecentReleases = responses
      .filter(response => response.status === 'fulfilled') // Only keep fulfilled responses
      .flatMap(response => {
        const data = response.value; // Get the value of the fulfilled promise
        return data?.filter(item => isRecentRelease(item, customPastDate)) || [];
      });

    return allRecentReleases;

  } catch (error) {
    console.error("Error fetching recent releases:", error);
    return [];
  }
}

function isRecentRelease(item: SpotifyAlbum, customPastDate: Date): boolean {
  if (!item || !item.release_date || !item.album_type) return false;
  if (item.release_date_precision !== "day") return false;
  return new Date(item.release_date) >= customPastDate;
}

export async function getNewReleasesFromArtists(
  session: Session
): Promise<Array<SpotifyAlbum>>{
  const artists = await getArtistsFromUser(session)
  return getRecentReleases(artists, session);
}