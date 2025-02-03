'use client'

import { SpotifyTrack, AuthSession } from "@/types/types"
import RecentlyPlayedCard from "@/components/cards/RecentlyPlayedCard"
import { useState, useEffect } from "react";
import { getRecentlyPlayed } from "@/lib/spotifyCalls"
import { cn } from "@/lib/utils";

export default function RecentlyPlayedList(
  { session }: AuthSession
) {
  const [tracks, setTracks] = useState<Array<SpotifyTrack>>([])
  const [limit, setLimit] = useState<number>(10)

  useEffect(() => {
    const getTracks = async () => {
      const tracksData = await getRecentlyPlayed(limit, session)
      setTracks(tracksData)
    }
    getTracks()
    
  }, [limit])

   return (
      <>
        <div className="px-1 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold"> Recently Played </h1>
          </div>
          <div className="text-xs h-full flex items-center">
            <button 
              className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600",{"text-green-600": limit === 10})}
              onClick={() => setLimit(10)}
            >
              Past 10
            </button>
            <button 
              className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600 mx-3", {"text-green-600": limit === 20})}
              onClick={() => setLimit(20)}
            >
              Past 20
            </button>
            <button 
              className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600", {"text-green-600": limit === 50})}
              onClick={() => setLimit(50)}
            >
              Past 50
            </button>
            
          </div>
        </div>
        <div className="h-5/6 w-full flex text-center overflow-x-scroll py-2">
            {tracks.map((track, index) => (
              <RecentlyPlayedCard
              key={index}
              className="rounded px-1 lg:min-w-28"  // adjust the margin for each card
              index={index+1}
              image={track.album.images[0].url as string}
              name={track.name}
              artist={track?.artists[0].name}
              />
            ))}
        </div>
      </>
   ) 
  }
