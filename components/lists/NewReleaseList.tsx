'use client'

import NewReleaseCard from "@/components/cards/NewReleaseCard"
import { SpotifyAlbum, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getNewReleasesFromArtists } from "@/lib/spotifyCalls"

export default function RecentlyPlayedList(
  { session }: AuthSession
){
  const [albums, setAlbums] = useState<Array<SpotifyAlbum>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAlbums = async () => {
      setIsLoading(true)
      try {
        const albumsData = await getNewReleasesFromArtists(session)
        const sortedAlbums = albumsData.sort((a, b) => {
          const dateA = new Date(a.release_date)
          const dateB = new Date(b.release_date)
          return dateB.getTime() - dateA.getTime()
        })
        console.log("sortedAlbums", sortedAlbums)
        setAlbums(sortedAlbums)
      } catch (error) {
        console.error("Error fetching albums:", error)
      } finally {
        setIsLoading(false)
      }
    }
    getAlbums()
  }, [])

   return (
    <>
      <div className="h-[15%] lg:h-[10%] flex lg:justify-center justify-between items-center pb-2">
        <h1 className="text-2xl font-extrabold text-container-foreground tracking-tight uppercase">New Releases</h1>
      </div>
      {/* Scrollable grid container */}
      <div className="lg:h-[90%] flex lg:justify-center overflow-y-auto pb-2">
        <div className="grid gap-1 grid-flow-col lg:grid-flow-row">
          {albums?.map((album, index) => (
            // <div key={album.id} className="container">
              <NewReleaseCard
                index={index + 1}
                image={album?.images[0].url as string}
                name={album?.name}
                artist={album?.artists[0].name}
                type={album.album_type}
                release_date={album.release_date}
              />
            // {/* </div> */}
          ))}
        </div>
      </div>
      </>
  ) 
  }
