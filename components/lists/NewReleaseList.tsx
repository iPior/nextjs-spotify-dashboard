'use client'

import { Input } from "@/components/shadcn-ui/input"
import { Label } from "@/components/shadcn-ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import RecentlyPlayedCard from "@/components/cards/RecentlyPlayedCard"
import { SpotifyAlbum, AuthSession } from "@/types/types"
import { useState, useEffect } from "react";
import { getNewReleases, getNewReleasesFromArtist } from "@/lib/spotifyCalls"

export default function RecentlyPlayedList(
  { session }: AuthSession
){
  const [albums, setAlbums] = useState<Array<SpotifyAlbum>>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const getAlbums = async () => {
      const albumsData = await getNewReleases(session)
      setAlbums(albumsData)
    }
    getAlbums()
  }, [])

    useEffect(() => {
    const getData = async () => {
      const data = await getNewReleasesFromArtist(search, session)
      setAlbums(data)
    }
    getData()
  }, [search])
  

   return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="px-1 text-2xl font-bold">New Releases</h1>
        <div className="flex items-center font-bold">
          <Label htmlFor="text" className="text-xl mr-2 h-fll">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Label>
          <Input type="text" placeholder="Artist name" onChange={(e) => setSearch(e.target.value.toString())}/>
        </div>
      </div>
      <div className="h-5/6 w-full flex text-center overflow-x-scroll py-2">
          {albums?.map((album, index) => (
            <RecentlyPlayedCard
            key={index}
            className="rounded px-1 lg:min-w-28"  // adjust the margin for each card
            index={index+1}
            image={album.images[0].url as string}
            name={album.name}
            artist={album?.artists[0].name}
            />
          ))}
      </div>
      </>
  ) 
  }
