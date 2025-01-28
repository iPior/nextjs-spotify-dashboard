import DashboardContainer from "@/components/DashboardContainer"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { SpotifyTrack } from "@/types/types"
import RecentlyPlayedList from "@/components/RecentlyPlayedList"


export default async function RecentlyPlayed() {
  const session = await getServerSession(authOptions)
    const url: string = "https://api.spotify.com/v1/me/player/recently-played?limit=10"
    const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
    })
    const data = await res.json()
    const tracks: Array<SpotifyTrack> = data.items.map((item: {track: SpotifyTrack})=> item.track)

  return (
    <div className="h-1/4 w-4/5 p-2">
      <DashboardContainer>
        {/* <div className="h-1/6"> */}
          <div className="px-1 flex justify-between items-center">
            <h1 className=" text-2xl font-bold">Recently Played</h1>
            <div className="text-xs h-full flex items-center">
                <button className="font-bold tracking-widest uppercase text-green-600">
                  Past 10
                </button>
                <button className="mx-3 font-bold text-white tracking-widest uppercase hover:text-green-600">
                  Past 20
                </button>
                <button className="font-bold text-white tracking-widest uppercase hover:text-green-600">
                  Past 50
                </button>
            </div>
          </div>
        {/* </div> */}
        {RecentlyPlayedList(tracks)}
      </DashboardContainer>
    </div>
  )
}
