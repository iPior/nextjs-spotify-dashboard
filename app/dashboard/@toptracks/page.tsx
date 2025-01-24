import { authOptions } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function TopTracks() {

  return (
    <div
      className='h-1/2 w-1/2 p-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex items-center justify-center'
    >
      page 1
    </div>
  )
}
