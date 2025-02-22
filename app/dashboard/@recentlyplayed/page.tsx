import RecentlyPlayedList from "@/components/lists/RecentlyPlayedList"
import DashboardContainer from "@/components/DashboardContainer"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";


export default async function RecentlyPlayed() {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/");

  return (
      <DashboardContainer>
        <RecentlyPlayedList session={session} />
      </DashboardContainer>
  )
}
