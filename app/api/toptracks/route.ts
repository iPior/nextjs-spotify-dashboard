import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from "../auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { getSession } from "next-auth/react";
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const session = await getSession({ req })
    const url: string = "https://api.spotify.com/v1/me/top/artists?offset=0"
    console.log("token", session?.user?.accessToken)

    const toptracks = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
    })
    res.status(200).json(toptracks)

    // .catch((error) => {
    //     console.error('Error:', error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ message: 'Error fetching data from Spotify' }),
    //     };
    // });
}