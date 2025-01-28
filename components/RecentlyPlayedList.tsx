import { SpotifyTrack } from "@/types/types"
import RecentlyPlayedCard from "@/components/RecentlyPlayedCard"

export default function RecentlyPlayedList(tracks: Array<SpotifyTrack>) {


   return (
      <div className="h-5/6 w-full flex text-center overflow-x-scroll py-2">
          {tracks.map((track, index) => (
            <RecentlyPlayedCard
            key={index}
            className="rounded px-1 lg:min-w-28"  // adjust the margin for each card
            index={index+1}
            image={track.album.images[0].url as string}
            name={track.name}
            artist={track?.artists[0].name}
            />
          ))}
      </div>
   ) 
  }
