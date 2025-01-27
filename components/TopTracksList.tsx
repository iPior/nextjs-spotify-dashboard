import { SpotifyTrack } from "@/types/types"
import TrackCard from "@/components/TrackCard"

export default function TopTracksList(tracks: Array<SpotifyTrack>) {

  return (
    <div
      className="h-5/6 flex flex-col w-full overflow-y-scroll"
    >
      {
        tracks.map((track, index) => (
          <TrackCard
            className="flex w-full mb-2 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4"  // adjust the margin for each card
            key={index}
            index={index+1}
            image={track.album.images[0].url as string}
            name={track.name}
            artist={track?.artists[0].name}
          />
        ))
      }
    </div>
  )
}
