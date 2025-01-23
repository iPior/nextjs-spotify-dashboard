import { authOptions } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
        redirect('/')
    }

  return (
    <div>
      <h1>geeas</h1>
    </div>
  );
}
