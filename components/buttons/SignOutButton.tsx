"use client";

import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { Button } from "@/components/shadcn-ui/button"

export const SignOutButton = () => {
  // ALTERNATE LOG OUT METHOD 
  // const router = useRouter();
  // const handleSignOut = async () => {
  //   await signOut({ redirect: false }); // Clear NextAuth session
  //   router.push("/logout-redirect");
  // };
  // return <Button onClick={handleSignOut}>Sign Out</Button>;

  return <Button onClick={() => signOut({ callbackUrl: '/' })} variant={"default"}>Sign out</Button> 
};