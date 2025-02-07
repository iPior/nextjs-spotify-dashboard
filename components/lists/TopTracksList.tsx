'use client'

import TrackCard from "@/components/cards/TrackCard"
import ButtonTriplet from "@/components/buttons/ButtonTriplet"
import { SpotifyTrack, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getTopTracks } from "@/lib/spotifyCalls"

export default function TopTracksList(
  { session }: AuthSession
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

  return (
    <>
      <ButtonTriplet header="Top Tracks" term={term} setTerm={setTerm}/>
      <div className="h-5/6 flex flex-col w-full overflow-y-scroll">
        {tracks.map((track, index) => (
            <TrackCard
              className="flex w-full mb-2 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4"  // adjust the margin for each card
              key={index}
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
