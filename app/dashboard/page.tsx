import { Metadata } from 'next';
// import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

import TopTracksList from "@/components/lists/TopTracksList"
import TopArtistsList from "@/components/lists/TopArtistsList"
import NewReleaseList from "@/components/lists/NewReleaseList"
import RecentlyPlayedList from "@/components/lists/RecentlyPlayedList"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View your dashboard with top tracks, artists, and new releases.",
  keywords: "dashboard, music, top tracks, top artists, new releases",
  authors: [{ name: "Piotr Szaran"}],
};

export default async function Dashboard() {
  const session = await getServerSession()
  if (!session) {
      redirect('/') 
  }

  return (
    <div className="h-full w-full flex flex-col lg:flex-row mx-auto">
      <div className="h-auto w-full lg:w-3/12 xl:w-1/4 3xl:w-[20%]! lg:h-full p-1">
          <NewReleaseList session={session} />
      </div>
      <div className="w-full lg:w-9/12 xl:w-3/4 3xl:w-[80%]! lg:h-full">
        <div className="h-auto lg:h-1/3 p-1">
          <RecentlyPlayedList session={session} />
        </div>
        <div className="flex flex-col md:flex-row  md:h-[66vh] lg:h-2/3">
          <div className="md:w-1/2 h-[450px] md:h-full p-1">
            <TopTracksList session={session} />
          </div>
          <div className="md:w-1/2 h-[450px] md:h-full p-1">
            <TopArtistsList session={session} />
          </div>
        </div>
      </div>
    </div>
  );
}
