'use client'

import { SpotifyTrack, AuthSession } from "@/types/types"
import RecentlyPlayedCard from "@/components/cards/RecentlyPlayedCard"
import { useState, useEffect } from "react";
import { getRecentlyPlayed } from "@/lib/spotifyCalls"
import RecentlyPlayedButtonGroup from "../buttons/RecentlyPlayedButtonGroup";
import { motion, AnimatePresence } from "framer-motion"
import DashboardContainer from "@/components/DashboardContainer"
import LoadingScreen from "@/components/LoadingBar";

export default function RecentlyPlayedList(
  { session }: AuthSession
) {
  const [allTracks, setAllTracks] = useState<Array<SpotifyTrack>>([])
  const [trackList, setTrackList] = useState<Array<SpotifyTrack>>([])
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getTracks = async () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      try {
        const tracksData = await getRecentlyPlayed(session)
        setAllTracks(tracksData)
      } catch (error) {
        console.error("Error fetching tracks:", error)
      }
    }
    getTracks()
  }, [])

   useEffect(() => {
    const subList = allTracks?.slice((page-1)*10,(page*10))
    setTrackList(subList)
  }, [allTracks, page])

   return (
    <DashboardContainer>
      <RecentlyPlayedButtonGroup page={page} setPage={setPage} />
      <div className="w-full h-5/6 text-center overflow-x-auto pb-2">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-1 grid-flow-col grid-rows-1 h-full"
            >
              {trackList?.map((track, index) => (
                <RecentlyPlayedCard
                  key={`${track.id}-${index}`}
                  image={track.album.images[0].url as string}
                  name={track?.name}
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
