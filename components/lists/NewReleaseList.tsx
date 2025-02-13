'use client'

import { Input } from "@/components/shadcn-ui/input"
import { Label } from "@/components/shadcn-ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import NewReleaseCard from "@/components/cards/NewReleaseCard"
import { SpotifyAlbum, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getNewReleasesFromArtists } from "@/lib/spotifyCalls"

export default function RecentlyPlayedList(
  { session }: AuthSession
){
  const [albums, setAlbums] = useState<Array<SpotifyAlbum>>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const getAlbums = async () => {
      const albumsData = await getNewReleasesFromArtists(session)
      console.log(albumsData)
      setAlbums(albumsData)
    }
    getAlbums()
  }, [])

  //   useEffect(() => {
  //   const getData = async () => {
  //     const data = await getNewReleasesFromArtistSearch(search, session)
  //     setAlbums(data)
  //   }
  //   getData()
  // }, [search])
  

   return (
    <>
      <div className="h-[5%] flex justify-between items-center">
        <h1 className="px-2 text-2xl font-bold tracking-tighter uppercase">New Releases</h1>
      </div>
      <div className="h-[95%] text-center overflow-y-scroll grid grid-cols-1 px-2">
          {albums?.map((album, index) => (
            <NewReleaseCard
            key={index}
            index={index+1}
            image={album?.images[0].url as string}
            name={album?.name}
            artist={album?.artists[0].name}
            />
          ))}
      </div>
      </>
  ) 
  }
