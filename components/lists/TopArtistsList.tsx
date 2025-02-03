'use client'

import { SpotifyArtist, AuthSession } from "@/types/types"
import ArtistCard from "@/components/cards/ArtistCard"
import { useState, useEffect } from "react";
import { getTopArtists } from "@/lib/spotifyCalls"
import { cn } from "@/lib/utils";

export default function TopArtistsList(
 { session }: AuthSession
) {
  const [artists, setArtists] = useState<Array<SpotifyArtist>>([])
  const [term, setTerm] = useState<string>("short_term")
  
  useEffect(() => {
    const getArtists = async () => {
      const artistsData = await getTopArtists(term, session)
      setArtists(artistsData)
    }
    getArtists()
  }, [term])

  return (
    <>
      <div className="mb-4 px-1 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold"> Top Artists </h1>
        </div>
        <div className="text-xs h-full flex items-center">
          <button 
            className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600",{"text-green-600": term === "short_term"})}
            onClick={() => setTerm("short_term")}
          >
            3 Months
          </button>
          <button 
            className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600 mx-3", {"text-green-600": term === "medium_term"})}
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
      <div className="h-5/6 flex flex-col w-full overflow-y-scroll" >
        {artists.map((artist, index) => (
          <ArtistCard
            className="flex w-full mb-2 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4"  // adjust the margin for each card
            key={index}
            index={index+1}
            image={artist?.images[0].url as string}
            name={artist.name}   
          />
        ))}
      </div>
    </>
  )
}
