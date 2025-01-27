import DashboardContainer from "@/components/DashboardContainer"
import { getServerSession } from "next-auth/next"

export default async function Profile() {
  const session = await getServerSession();

    return (
      <div className="h-1/4 w-1/5 p-2">
        <DashboardContainer> 
            <img 
              src={session?.user.image}
              className="aspect-square h-full w-full rounded"  
            />
        </DashboardContainer>
    </div>
  )
}
