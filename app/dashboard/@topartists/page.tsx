import { authOptions } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { SpotifyArtist } from "@/types/types"
import TopArtistsList from "./topArtistsList"

export default async function TopArtists() {
  const session = await getServerSession(authOptions)
    const url: string = "https://api.spotify.com/v1/me/top/artists?offset=0"
    const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
    })
    const data = await res.json()
    const artists: Array<SpotifyArtist> = data.items

    return (
    <div
      className='h-1/2 w-1/2 p-4 overflow-y-scroll bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
    >
      <h1 className="relative">Top Artists in the past 3 months</h1>
      {TopArtistsList(artists)}
      </div>
  )
}
