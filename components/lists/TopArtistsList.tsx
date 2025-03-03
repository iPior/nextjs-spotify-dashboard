'use client'

import ArtistCard from "@/components/cards/ArtistCard"
import ButtonTriplet from "@/components/buttons/ButtonTriplet"
import { SpotifyArtist, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getTopArtists } from "@/lib/spotifyCalls"
import { motion, AnimatePresence } from "framer-motion"

export default function TopArtistsList(
 { session }: AuthSession
) {
  const [artists, setArtists] = useState<Array<SpotifyArtist>>([])
  const [shortTermArtists, setShortTermArtists] = useState<Array<SpotifyArtist>>([])
  const [mediumTermArtists, setMediumTermArtists] = useState<Array<SpotifyArtist>>([])
  const [longTermArtists, setLongTermArtists] = useState<Array<SpotifyArtist>>([])
  const [term, setTerm] = useState<string>("short_term")
  
  // Prerender all the initial data when the component mounts
  useEffect(() => {
    const getArtistsShortTerm = async () => {
      const artistsData = await getTopArtists("short_term", session)
      setShortTermArtists(artistsData)
      setArtists(artistsData) // initial data to start with short_term artists
    }
    const getArtistsMediumTerm = async () => {
      const artistsData = await getTopArtists("medium_term", session)
      setMediumTermArtists(artistsData)
    }
    const getArtistsLongTerm = async () => {
      const artistsData = await getTopArtists("long_term", session)
      setLongTermArtists(artistsData)
    }
    getArtistsShortTerm()
    getArtistsMediumTerm()
    getArtistsLongTerm()
  }, [])

  useEffect(() => {
    if (term === "short_term") setArtists(shortTermArtists);
    else if (term === "medium_term") setArtists(mediumTermArtists);
    else setArtists(longTermArtists) ;
  }, [term])

  return (
    <>
      <ButtonTriplet header="Top Artists" term={term} setTerm={setTerm}/>
      <div className="h-[80%] sm:h-[85%] 2xl:h-[90%] flex flex-col w-full overflow-y-scroll" >
        <AnimatePresence mode="wait">
          <motion.div
            key={term}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {artists?.map((artist, index) => (
              <ArtistCard
                key={index}
                index={index+1}
                image={artist?.images[0].url as string}
                name={artist.name}
                genres={artist.genres}   
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
