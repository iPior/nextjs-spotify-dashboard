import { SpotifyArtist } from "@/types/types"
import ArtistCard from "@/components/ArtistCard"

export default function TopArtistsList(artists: Array<SpotifyArtist>) {

  return (
    <div
      className="h-5/6 flex flex-col w-full overflow-y-scroll"
    >
      {artists.map((artist, index) => (
        <ArtistCard
          className="flex w-full mb-2 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4"  // adjust the margin for each card
          key={index}
          index={index+1}
          image={artist?.images[0].url as string}
          name={artist.name}   
        />
      ))}
    </div>
  )
}
