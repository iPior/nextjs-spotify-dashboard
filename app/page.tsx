import { Button } from "@/app/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-8">Hello Spotify</h1>
      <Button asChild>
        <Link href="/dashboard"> Log in! </Link>
      </Button>
    </div>
  );
}
