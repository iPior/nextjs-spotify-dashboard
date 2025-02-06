import { getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { SignInButton } from "@/components/SignInButton";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) redirect("/dashboard");

  // localStorage.setItem("theme", "light");  

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-8">Hello Spotify</h1>
      <SignInButton/>
    </div>
  );
}
