"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'

import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/options"
import { signIn } from "next-auth/react";

export default  function Home() {
  // const session = await getServerSession(authOptions)

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-8">Hello Spotify</h1>
      <Button onClick={() => signIn('spotify', { callbackUrl: '/dashboard' })}>
        Log in!
      </Button>
    </div>
  );
}
