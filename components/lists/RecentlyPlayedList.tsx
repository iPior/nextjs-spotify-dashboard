'use client'

import { SpotifyTrack, AuthSession } from "@/types/types"
import RecentlyPlayedCard from "@/components/cards/RecentlyPlayedCard"
import { useState, useEffect } from "react";
import { getRecentlyPlayed } from "@/lib/spotifyCalls"
import RecentlyPlayedButtonGroup from "../buttons/RecentlyPlayedButtonGroup";
import { motion, AnimatePresence } from "framer-motion"

export default function RecentlyPlayedList(
  { session }: AuthSession
) {
  const [allTracks, setAllTracks] = useState<Array<SpotifyTrack>>([])
  const [trackList, setTrackList] = useState<Array<SpotifyTrack>>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const getTracks = async () => {
      const tracksData = await getRecentlyPlayed(session)
      setAllTracks(tracksData)
    }
    getTracks()
    
  }, [])

   useEffect(() => {
    const subList = allTracks?.slice((page-1)*10,(page*10))
    setTrackList(subList)
  }, [allTracks, page])

   return (
      <>
        <RecentlyPlayedButtonGroup page={page} setPage={setPage} />
        <div className="lg:h-5/6 w-full text-center overflow-y-auto pb-2">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex"
              >
                {trackList?.map((track, index) => (
                  <div key={`${track.id}-${index}`} className="col-span-1">
                    <RecentlyPlayedCard
                    key={index}
                    index={index+1}
                    image={track.album.images[0].url as string}
                    name={track?.name}
                    artist={track?.artists[0].name}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </>
   ) 
  }
