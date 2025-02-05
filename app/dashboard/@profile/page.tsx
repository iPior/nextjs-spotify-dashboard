import DashboardContainer from "@/components/DashboardContainer"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession();
  if(!session) redirect("/");

    return (
      <div className="h-1/4 w-1/5 p-2">
        
        <DashboardContainer className={"p-0"}> 
            <img 
              src={session?.user.image}
              className="aspect-square h-full w-full rounded"  
            />
        </DashboardContainer>
    </div>
  )
}
