import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { Session } from "next-auth";

export async function spotifyGet(
  url: string,
  session: Session
) {
    if (!session) {
      return null;
    }
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    }).then(res => res.json())
    return res
}

export async function getAuthSession() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null;
  }
  return session
}