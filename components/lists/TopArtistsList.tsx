'use client'

import ArtistCard from "@/components/cards/ArtistCard"
import ButtonTriplet from "@/components/buttons/ButtonTriplet"
import { SpotifyArtist, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getTopArtists } from "@/lib/spotifyCalls"
import { motion, AnimatePresence } from "framer-motion"
import DashboardContainer from "@/components/DashboardContainer"
import LoadingScreen from "@/components/LoadingBar"

export default function TopArtistsList(
 { session }: AuthSession
) {
  const [artists, setArtists] = useState<Array<SpotifyArtist>>([])
  const [term, setTerm] = useState<string>("short_term")
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const fetchArtists = async () => {
      const now = new Date();
      const lastArtistFetch = localStorage.getItem("lastTrackFetch");
      const storedShortTermArtists = localStorage.getItem("topArtistsShortTerm");

      if (lastArtistFetch && storedShortTermArtists) {
        const lastFetchDate = new Date(lastArtistFetch);
        const hoursSinceLastFetch = (now.getTime() - lastFetchDate.getTime()) / (1000 * 60 * 60);

        if (hoursSinceLastFetch < 24) {
          setArtists(JSON.parse(storedShortTermArtists));
          return;
        }
      }

      // Fetch new data from API
      try {
        const shortTermArtistsData = await getTopArtists("short_term", session);
        const mediumTermArtistsData = await getTopArtists("medium_term", session);
        const longTermArtistsData = await getTopArtists("long_term", session);

        localStorage.setItem("topArtistsShortTerm", JSON.stringify(shortTermArtistsData));
        localStorage.setItem("topArtistsMediumTerm", JSON.stringify(mediumTermArtistsData));
        localStorage.setItem("topArtistsLongTerm", JSON.stringify(longTermArtistsData));
        localStorage.setItem("lastArtistFetch", now.toISOString());
        
        setArtists(shortTermArtistsData);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, [session]);

  useEffect(() => {
    if (term === "short_term") {
      const storedArtists = localStorage.getItem("topArtistsShortTerm");
      if (storedArtists) {
        setArtists(JSON.parse(storedArtists));
      }
    } else if (term === "medium_term") {
      const storedArtists = localStorage.getItem("topArtistsMediumTerm");
      if (storedArtists) {
        setArtists(JSON.parse(storedArtists));
      }
    } else if (term === "long_term") {
      const storedArtists = localStorage.getItem("topArtistsLongTerm");
      if (storedArtists) {
        setArtists(JSON.parse(storedArtists));
      }
    }
  }, [term]);

  return (
    <DashboardContainer>
      <ButtonTriplet header="Top Artists" term={term} setTerm={setTerm}/>
      <div className="h-[80%] sm:h-[85%] 2xl:h-[90%]! flex flex-col w-full overflow-y-scroll" >
        {isLoading ? (
          <LoadingScreen />
        ) : (
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
                  key={`${artist.id}-${index}`}
                  index={index+1}
                  image={artist?.images[0].url as string}
                  name={artist.name}
                  genres={artist.genres}   
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </DashboardContainer>
  )
}
