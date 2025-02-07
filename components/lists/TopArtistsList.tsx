'use client'

import ArtistCard from "@/components/cards/ArtistCard"
import ButtonTriplet from "@/components/buttons/ButtonTriplet"
import { SpotifyArtist, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getTopArtists } from "@/lib/spotifyCalls"

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
      <ButtonTriplet header="Top Artists" term={term} setTerm={setTerm}/>
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
