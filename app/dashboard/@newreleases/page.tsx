import NewReleaseList from "@/components/lists/NewReleaseList"
import DashboardContainer from "@/components/DashboardContainer"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";

export default async function NewReleases() {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/");

    return (
      
        <DashboardContainer>
          <NewReleaseList session={session}/>
        </DashboardContainer>
    )
}