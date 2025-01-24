import { authOptions } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { SpotifyTrack } from "@/types/types"
import TopTracksList from "./topTracksList"

export default async function TopTracks() {
  const session = await getServerSession(authOptions)
  const url: string = "https://api.spotify.com/v1/me/top/tracks?offset=0"
  const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
  })
  const data = await res.json()
  const tracks: Array<SpotifyTrack> = data.items

  return (
    <div
      className='h-1/2 w-1/2 p-2 overflow-y-scroll rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
    >
      <h1 className="relative">Top Tracks in the past 3 months</h1>
      {TopTracksList(tracks)}
    </div>
  )
}
