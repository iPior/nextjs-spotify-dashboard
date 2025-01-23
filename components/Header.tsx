"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { signOut } from 'next-auth/react'


export default function Header() {
  return (
    <header className='flex justify-between py-4'>
      <h1></h1>
      <Button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</Button>
    </header>
  )
}
