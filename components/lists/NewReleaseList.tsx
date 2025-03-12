'use client'

import NewReleaseCard from "@/components/cards/NewReleaseCard"
import { SpotifyAlbum, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getNewReleasesFromArtists } from "@/lib/spotifyCalls"
import DashboardContainer from "@/components/DashboardContainer"
import Loading from "@/components/LoadingBar";

export default function RecentlyPlayedList(
  { session }: AuthSession
){
  const [albums, setAlbums] = useState<Array<SpotifyAlbum>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAlbums = async () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)

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
      }
    }
    getAlbums()
  }, [])

   return (
    <DashboardContainer>
      <h1 className=" text-2xl font-extrabold text-container-foreground tracking-tight uppercase pb-2 truncate">New Releases</h1>
      {isLoading ? <Loading/> : (
        <div className="lg:h-[95%] flex lg:justify-center justify-start overflow-y-auto">
          <div className="grid gap-1 grid-flow-col lg:grid-flow-row mr-2">
            {albums?.map((album, index) => (
              <NewReleaseCard
                key={`${album.id}-${index}`}
                index={index + 1}
                image={album?.images[0].url as string}
                name={album?.name}
                artist={album?.artists[0].name}
                type={album.album_type}
                release_date={album.release_date}
              />
            ))}
          </div>
        </div>
      )}
    </DashboardContainer>
  ) 
  }
