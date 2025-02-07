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
  const [shortTermTracks, setShortTermTracks] = useState<Array<SpotifyTrack>>([])
  const [mediumTermTracks, setMediumTermTracks] = useState<Array<SpotifyTrack>>([])
  const [longTermTracks, setLongTermTracks] = useState<Array<SpotifyTrack>>([])
  const [term, setTerm] = useState<string>("short_term")

  useEffect(() => {
    const getShortTermTracks = async () => {
      const tracksData = await getTopTracks("short_term", session)
      setShortTermTracks(tracksData)
      setTracks(tracksData) // initial data to start with short_term tracks
    }
    const getMediumTermTracks = async () => {
      const tracksData = await getTopTracks("medium_term", session)
      setMediumTermTracks(tracksData)
    }
    const getLongTermTracks = async () => {
      const tracksData = await getTopTracks("long_term", session)
      setLongTermTracks(tracksData)
    }
    getShortTermTracks()
    getMediumTermTracks()
    getLongTermTracks()
  }, [])

  useEffect(() => {
    if (term === "short_term") setTracks(shortTermTracks);
    else if (term === "medium_term") setTracks(mediumTermTracks);
    else setTracks(longTermTracks) ;
  }, [term])

  return (
    <>
      <ButtonTriplet header="Top Tracks" term={term} setTerm={setTerm}/>
      <div className="h-5/6 flex flex-col w-full overflow-y-scroll">
        {tracks?.map((track, index) => (
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
