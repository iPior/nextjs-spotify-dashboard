import { SpotifyAlbum} from "@/types/types"
import RecentlyPlayedCard from "@/components/RecentlyPlayedCard"

export default function RecentlyPlayedList(albums: Array<SpotifyAlbum>) {


   return (
      <div className="h-5/6 w-full flex text-center overflow-x-scroll py-2">
          {albums.map((album, index) => (
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
   ) 
  }
