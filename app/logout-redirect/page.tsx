"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// ALTERNATE LOG OUT METHOD
const LogoutRedirect = () => {
  const router = useRouter();
  window.location.href = `https://www.spotify.com/fr/logout`;
  
  useEffect(() => {
    // Wait for a moment to ensure Spotify's logout is processed
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return <p>Logging you out... Redirecting back to the app.</p>;
};

export default LogoutRedirect;
