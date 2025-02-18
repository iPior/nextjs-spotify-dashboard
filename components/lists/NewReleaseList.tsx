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
      <div className="h-[5%] flex justify-between items-center">
        <h1 className="px-2 text-2xl font-extrabold text-container-foreground tracking-tighter uppercase">New Releases</h1>
      </div>
      <div className="h-[95%] text-center overflow-y-scroll grid grid-cols-1 px-2">
          {albums?.map((album, index) => (
            <NewReleaseCard
            key={index}
            index={index+1}
            image={album?.images[0].url as string}
            name={album?.name}
            artist={album?.artists[0].name}
            type={album.album_type}
            release_date={album.release_date}
            />
          ))}
      </div>
      </>
  ) 
  }
