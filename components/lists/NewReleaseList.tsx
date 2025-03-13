'use client'

import NewReleaseCard from "@/components/cards/NewReleaseCard"
import { SpotifyAlbum, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getNewReleasesFromArtists } from "@/lib/spotifyCalls"
import DashboardContainer from "@/components/DashboardContainer"
import Loading from "@/components/LoadingBar";

export default function NewReleaseList({ session }: AuthSession) {
  const [albums, setAlbums] = useState<Array<SpotifyAlbum>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const fetchAlbums = async () => {
      const now = new Date()
      const lastFetch = localStorage.getItem("lastNewReleasesFetch")
      const storedAlbums = localStorage.getItem("newReleases")

      if (lastFetch && storedAlbums) {
        const lastFetchDate = new Date(lastFetch)
        const hoursSinceLastFetch = (now.getTime() - lastFetchDate.getTime()) / (1000 * 60 * 60)

        if (hoursSinceLastFetch < 24) {
          setAlbums(JSON.parse(storedAlbums))
          return
        }
      }

      // Fetch new data from API
      try {
        const albumsData = await getNewReleasesFromArtists(session)
        const sortedAlbums = albumsData.sort((a, b) => {
          const dateA = new Date(a.release_date)
          const dateB = new Date(b.release_date)
          return dateB.getTime() - dateA.getTime()
        })
        setAlbums(sortedAlbums)
        
        localStorage.setItem("newReleases", JSON.stringify(sortedAlbums))
        localStorage.setItem("lastNewReleasesFetch", now.toISOString())
      } catch (error) {
        console.error("Error fetching albums:", error)
      }
    }

    fetchAlbums()
  }, [session])

   return (
    <DashboardContainer>
      <h1 className=" text-2xl font-extrabold text-container-foreground tracking-tight uppercase pb-2 truncate">New Releases</h1>
      {isLoading ? <Loading/> : (
        <div className="lg:h-[95%] overflow-y-auto grid gap-1 grid-flow-col lg:grid-flow-row pr-1">
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
      )}
    </DashboardContainer>
  ) 
  }
