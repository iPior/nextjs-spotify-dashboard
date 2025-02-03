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
  return spotifyGet(url,session).then(data => data.items)
}

export async function getTopArtists(
  term: string,
  session: Session
): Promise<Array<SpotifyArtist>>{
  const url: string = `https://api.spotify.com/v1/me/top/artists?time_range=${term}&offset=0`
  return spotifyGet(url,session).then(data => data.items)
}

export async function getRecentlyPlayed(
  limit: number,
  session: Session
): Promise<Array<SpotifyTrack>>{
  const url: string = `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`
  return spotifyGet(url,session).then(data => data.items.map((item: {track: SpotifyTrack})=> item.track))
}

export async function getNewReleases(
  session: Session
): Promise<Array<SpotifyAlbum>>{
  const url: string = "https://api.spotify.com/v1/browse/new-releases?limit=20"
  return spotifyGet(url,session).then(data => data.albums.items)
}

export async function getNewReleasesFromArtist(
  search: string,
  session: Session
): Promise<Array<SpotifyAlbum>>{
  // first find artist ID

  // then find albums by artist ID

  // then filter the data by date

  // return data
  const url: string = "https://api.spotify.com/v1/browse/new-releases?limit=20"
  return spotifyGet(url,session).then(data => data.albums.items)
}