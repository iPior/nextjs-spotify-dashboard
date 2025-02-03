import { spotifyGet } from "./serverUtils";
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