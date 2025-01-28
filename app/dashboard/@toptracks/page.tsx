import { authOptions } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { SpotifyTrack } from "@/types/types"
import TopTracksList from "@/components/TopTracksList"
import DashboardContainer from "@/components/DashboardContainer"

export default async function TopTracks() {
  const session = await getServerSession(authOptions)
  const url: string = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&offset=0"
  const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
  })
  const data = await res.json()
  const tracks: Array<SpotifyTrack> = data.items

  return (
    <div className="h-1/2 w-1/2 p-2">
      <DashboardContainer>
        <div className="mb-4 px-1 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold"> Top Tracks </h1>
          </div>
          <div className="text-xs h-full flex items-center">
            <button className="font-bold tracking-widest uppercase text-green-600">
              3 Months
            </button>
            <button className="mx-2 font-bold text-white tracking-widest uppercase hover:text-green-600">
              6 Months
            </button>
            <button className="font-bold text-white tracking-widest uppercase hover:text-green-600">
              1 Year
            </button>
            
          </div>
        </div>
        {TopTracksList(tracks)}
      </DashboardContainer>
    </div>
  )
}
