import TopTracksList from "@/components/lists/TopTracksList"
import DashboardContainer from "@/components/DashboardContainer"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";

export default async function TopTracks() {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/");

  return (
      <DashboardContainer>
        <TopTracksList session={session} />
      </DashboardContainer>
  )
}
