import TopArtistsList from "@/components/lists/TopArtistsList"
import DashboardContainer from "@/components/DashboardContainer"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"

export default async function TopArtists() {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/");

    return (
      <DashboardContainer>
        <TopArtistsList session={session} />
      </DashboardContainer>
  )
}
