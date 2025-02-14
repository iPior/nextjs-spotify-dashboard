import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Session } from "next-auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function spotifyGet(
  url: string,
  session: Session
) {

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    }).then(res => res.json())

    // If token is expired (401), try to refresh
    if (res.status === 401) {
    
    }
    console.log(res)
    return res
}