import { SpotifyArtist } from "@/types/types"
import ArtistCard from "@/components/Card"

export default function TopArtistsList(artists: Array<SpotifyArtist>) {

  return (
    <div
      className="flex flex-col w-full overflow-hidden"
    >
      {artists.map((artist, index) => (
        <ArtistCard
          className="flex w-full mb-2 px-1 rounded transition duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer hover:-translate-x-1"  // adjust the margin for each card
          key={index}
          index={index+1}
          image={artist.images[0].url as string}
          name={artist.name}   
        />
      ))}
    </div>
  )
}
