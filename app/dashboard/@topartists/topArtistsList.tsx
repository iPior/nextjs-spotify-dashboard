import { SpotifyArtist } from "@/types/types"
import ArtistCard from "@/components/Card"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function TopArtistsList(artists: Array<SpotifyArtist>) {

  return (
    <>
      <Carousel className="max-w-xs">
      <CarouselContent>
        {artists.map((artist, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card >
                <CardContent className="flex items-center justify-center p-6">
                  <ArtistCard
                    image={artist.images[0].url as string}
                    name={artist.name}   
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
