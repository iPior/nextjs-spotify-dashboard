import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from "../auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { getSession } from "next-auth/react";
 
export async function GET() {

    const session = await getServerSession(authOptions)
    const url: string = "https://api.spotify.com/v1/me/top/artists?offset=0"
    console.log("token", session?.user?.accessToken)

    const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
    })
    const data = await res.json()
    return Response.json({ data })

}