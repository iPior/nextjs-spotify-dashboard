import { authOptions } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { SpotifyArtist } from "@/types/types"
import TopArtistsList from "@/components/TopArtistsList"
import DashboardContainer from "@/components/DashboardContainer"

export default async function TopArtists() {
  const session = await getServerSession(authOptions)
    const url: string = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&offset=0"
    const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
    })
    const data = await res.json()
    const artists: Array<SpotifyArtist> = data.items

    return (
    <div className="h-1/2 w-1/2 p-2">
      <DashboardContainer>
        <div className="h-1/6 px-1 flex justify-between">
          <div>
            <h1 className="text-4xl font-bold"> Top Artists </h1>
            <p className="text-sm">Past 3 months</p>
          </div>
          <div className="text-xs h-full">
              <button className="font-bold tracking-widest uppercase text-green-600">
                3 Months
              </button>
              <button className="mx-3 font-bold text-white tracking-widest uppercase hover:text-green-600">
                6 Months
              </button>
              <button className="font-bold text-white tracking-widest uppercase hover:text-green-600">
                1 Year
              </button>
              
          </div>
        </div>
        {TopArtistsList(artists)}
      </DashboardContainer>
    </div>
  )
}
