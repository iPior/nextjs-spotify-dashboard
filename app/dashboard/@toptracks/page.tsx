import TopTracksList from "@/components/TopTracksList"
import DashboardContainer from "@/components/DashboardContainer"
import { getAuthSession } from "@/lib/serverUtils"
import { redirect } from "next/navigation";

export default async function TopTracks() {
  const session = await getAuthSession();
  if(!session) redirect("/");

  return (
    <div className="h-1/2 w-1/2 p-2">
      <DashboardContainer>
        <TopTracksList session={session} />
      </DashboardContainer>
    </div>
  )
}
