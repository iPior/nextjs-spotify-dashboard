import React from 'react'
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function TopTracks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession();
  console.log(session?.user)
  return (
    <div
      className='h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex items-center justify-center'
    >
      page
      </div>
  )
}
