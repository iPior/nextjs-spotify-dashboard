import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { SignInButton } from "@/components/buttons/SignInButton";5

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) redirect("/dashboard");

  return (
    <div className="flex h-full flex-col items-center justify-center mx-auto w-1/2">
      <h1 className="text-9xl font-bold text-center">SpotiDash!</h1>
      <p className="text-center text-lg my-4">Sign in with your Spotify account to access a dynamic dashboard featuring your top artists, most-played tracks, recent releases, and cugrated recommendations. Explore trends in your music taste, track your listening history, and discover new favorites—all in one sleek and interactive interface.</p>
      <SignInButton />
    </div>
  );
}
