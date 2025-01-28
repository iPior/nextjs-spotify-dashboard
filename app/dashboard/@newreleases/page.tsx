import DashboardContainer from "@/components/DashboardContainer"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { SpotifyAlbum } from "@/types/types"
import NewReleaseList from "@/components/NewReleaseList"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default async function NewReleases() {
  const session = await getServerSession(authOptions)
  const url: string = "https://api.spotify.com/v1/browse/new-releases?limit=20"
  const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
  })
  const data = await res.json()
  console.log(data)
  const albums: Array<SpotifyAlbum> = data.albums.items

    return (
      <div className="h-1/4 w-full p-2">
        <DashboardContainer>
          <div className="flex justify-between items-center">
            <h1 className="px-1 text-2xl font-bold">New Releases</h1>
            <div className="h-full flex items-center font-bold">
              <Label htmlFor="text" className="text-xl mr-2 h-fll">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Label>
              <Input type="text" placeholder="Artist name"/>
            </div>
          </div>
          {/* </div> */}
        {NewReleaseList(albums)}
        </DashboardContainer>
      </div>
    )
}