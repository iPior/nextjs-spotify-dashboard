'use client'

import { SpotifyTrack } from "@/types/types"
import TrackCard from "@/components/TrackCard"
import { useState, useEffect } from "react";
import { Session } from "next-auth";
import { getTopTracks } from "@/lib/spotifyCalls"
import { cn } from "@/lib/utils";

interface TopTracksProps {
  // tracks: Array<SpotifyTrack>;
  session: Session;
}

export default function TopTracksList(
  { session }: TopTracksProps
) {
  const [tracks, setTracks] = useState<Array<SpotifyTrack>>([])
  const [term, setTerm] = useState<string>("short_term")

  useEffect(() => {
    const getTracks = async () => {
      const tracksData = await getTopTracks(term, session)
      setTracks(tracksData)
    }
    getTracks()
  }, [term])

  // useEffect(() => {
  //   const getTracks = async () => {
  //     const tracksData = await getTopTracks(term, session)
  //     setTracks(tracksData)
  //   }
  //   getTracks()
  // }, [term])
  
  return (
    <>
      <div className="mb-4 px-1 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold"> Top Tracks </h1>
        </div>
        <div className="text-xs h-full flex items-center">
          <button 
            className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600", {"text-green-600": term === "short_term"})}
            onClick={() => setTerm("short_term")}
          >
            3 Months
          </button>
          <button 
            className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600", {"text-green-600": term === "medium_term"})}
            onClick={() => setTerm("medium_term")}
          >
            6 Months
          </button>
          <button 
            className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600", {"text-green-600": term === "long_term"})}
            onClick={() => setTerm("long_term")}
          >
            1 Year
          </button>
          
        </div>
      </div>
      <div className="h-5/6 flex flex-col w-full overflow-y-scroll">
        {
          tracks.map((track, index) => (
            <TrackCard
              className="flex w-full mb-2 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4"  // adjust the margin for each card
              key={index}
              index={index+1}
              image={track.album.images[0].url as string}
              name={track.name}
              artist={track?.artists[0].name}
            />
          ))
        }
      </div>
    </>
  )
}
