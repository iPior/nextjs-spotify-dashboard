'use client'

import { SpotifyTrack, AuthSession } from "@/types/types"
import RecentlyPlayedCard from "@/components/cards/RecentlyPlayedCard"
import { useState, useEffect } from "react";
import { getRecentlyPlayed } from "@/lib/spotifyCalls"
import RecentlyPlayedButtonGroup from "../buttons/RecentlyPlayedButtonGroup";

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
        <div className="h-5/6 w-full flex text-center overflow-x-scroll py-2">
            {trackList?.map((track, index) => (
              <RecentlyPlayedCard
              key={index}
              index={index+1}
              image={track.album.images[0].url as string}
              name={track?.name}
              artist={track?.artists[0].name}
              />
            ))}
        </div>
      </>
   ) 
  }
