'use client'

import TrackCard from "@/components/cards/TrackCard"
import ButtonTriplet from "@/components/buttons/ButtonTriplet"
import { SpotifyTrack, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getTopTracks } from "@/lib/spotifyCalls"
import { motion, AnimatePresence } from "framer-motion"
import DashboardContainer from "@/components/DashboardContainer"
import LoadingScreen from "@/components/LoadingBar"

export default function TopTracksList(
  { session }: AuthSession
) {
  const [tracks, setTracks] = useState<Array<SpotifyTrack>>([])
  const [term, setTerm] = useState<string>("short_term")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true)
      const now = new Date();
      const lastTrackFetch = localStorage.getItem("lastTrackFetch");
      const storedShortTermTracks = localStorage.getItem("topTracksShortTerm");

      if (lastTrackFetch && storedShortTermTracks) {
        const lastFetchDate = new Date(lastTrackFetch);
        const hoursSinceLastFetch = (now.getTime() - lastFetchDate.getTime()) / (1000 * 60 * 60);

        if (hoursSinceLastFetch < 24) {
          setTracks(JSON.parse(storedShortTermTracks));
          setIsLoading(false);
          return;
        }
      }

      // Fetch new data from API
      try {
        const shortTermTracksData = await getTopTracks("short_term", session);
        const mediumTermTracksData = await getTopTracks("medium_term", session);
        const longTermTracksData = await getTopTracks("long_term", session);

        localStorage.setItem("topTracksShortTerm", JSON.stringify(shortTermTracksData));
        localStorage.setItem("topTracksMediumTerm", JSON.stringify(mediumTermTracksData));
        localStorage.setItem("topTracksLongTerm", JSON.stringify(longTermTracksData));
        localStorage.setItem("lastTrackFetch", now.toISOString());

        setTracks(shortTermTracksData);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
  }, [session]);

  useEffect(() => {
    if (term === "short_term") {
      const storedTracks = localStorage.getItem("topTracksShortTerm");
      if (storedTracks) {
        setTracks(JSON.parse(storedTracks));
      }
    } else if (term === "medium_term") {
      const storedTracks = localStorage.getItem("topTracksMediumTerm");
      if (storedTracks) {
        setTracks(JSON.parse(storedTracks));
      }
    } else if (term === "long_term") {
      const storedTracks = localStorage.getItem("topTracksLongTerm");
      if (storedTracks) {
        setTracks(JSON.parse(storedTracks));
      }
    }
  }, [term]);

  return (
    <DashboardContainer>
      <ButtonTriplet header="Top Tracks" term={term} setTerm={setTerm}/>
      <div className="h-[80%] sm:h-[85%] 2xl:h-[90%]! flex flex-col w-full overflow-y-scroll ">
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
          {tracks?.map((track, index) => (
            <TrackCard
              key={`${track.id}-${index}`}
              index={index+1}
              image={track.album.images[0].url as string}
              name={track.name}
              artist={track?.artists[0].name}
            />
          ))}
          </motion.div>
        </AnimatePresence>
        )}
      </div>
    </DashboardContainer>
  )
}
