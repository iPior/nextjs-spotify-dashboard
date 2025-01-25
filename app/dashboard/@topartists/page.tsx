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
    <div className="h-1/2 w-1/2 p-2">
      <div
        className='h-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
      >
        <div className="h-1/6 px-1">
          <h1 className="text-4xl font-bold"> Top Artists </h1>
          <p className="text-sm">Past 3 months</p>
        </div>
          {TopArtistsList(artists)}
      </div>
    </div>
  )
}
