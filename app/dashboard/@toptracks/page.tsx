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
    <div className="h-1/2 w-1/2 p-2">
      <div
        className=' h-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
      >
        <div className="h-1/6 px-1 flex justify-between">
          <div>
            <h1 className="text-4xl font-bold"> Top Tracks </h1>
            <p className="text-sm">Past 3 months</p>
          </div>
          <div className="text-xs h-full">
            <button className="underline font-bold text-white tracking-widest uppercase">
              3 Months
            </button>
            <button className="mx-2 font-bold text-white tracking-widest uppercase">
              6 Months
            </button>
            <button className="font-bold text-white tracking-widest uppercase">
              1 Year
            </button>
            
          </div>
        </div>
        {TopTracksList(tracks)}
      </div>
    </div>
  )
}
