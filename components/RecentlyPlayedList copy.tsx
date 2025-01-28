import { SpotifyTrack } from "@/types/types"
import RecentlyPlayedCard from "@/components/RecentlyPlayedCard"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function RecentlyPlayedList(tracks: Array<SpotifyTrack>) {


   return (
    <div className="h-full ">
      <div className="h-1/6">
        <h1 className="text-2xl font-bold">Recently Played</h1>
      </div>
      <Carousel
        className="h-5/6 flex items-center text-center"
      >
        <CarouselContent>
          {tracks.map((track, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                <RecentlyPlayedCard
                  className="rounded px-1"  // adjust the margin for each card
                  index={index+1}
                  image={track.album.images[0].url as string}
                  name={track.name}
                  artist={track?.artists[0].name}
                />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
     </div>
   ) 
  // return (
  //   <div
  //     className="h-full overflow-auto"
  //   >
  //     {
  //       tracks.map((track, index) => (
  //           <RecentlyPlayedCard
  //             className="px-1 w-1/5 rounded transition duration-500 ease-in-out transform hover:scale-105"  // adjust the margin for each card
  //             index={index+1}
  //             image={track.album.images[0].url as string}
  //             name={track.name}
  //             artist={track?.artists[0].name}
  //             />
  //       ))
  //     }
  // </div>
  // )
}
