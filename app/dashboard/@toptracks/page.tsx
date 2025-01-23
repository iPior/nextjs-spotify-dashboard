import { authOptions } from "../../api/auth/[...nextauth]/options"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import type { NextApiRequest, NextApiResponse } from "next";

export default async function TopTracks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { data: session } = useSession();
  // console.log(session)

  return (
    <div
      className='h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex items-center justify-center'
    >
      page
      </div>
  )
}
