"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"


export default function Header() {
  const { data: session, status } = useSession()

  
  return (
    <header className='flex justify-between items-center px-2 pt-4 pb-2'>
        <h1 className="text-4xl font-bold">
          {`SpotiDash/dashboard/${session?.user.name}`}
        </h1>
        {/* <Navbar /> */}
      {/* <Button> Dark Mode </Button> */}
      <Button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</Button>
    </header>
  )
}
