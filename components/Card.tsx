import { cardProps } from "@/types/types"

export default function ArtistCard({
  image,
  name,
}: cardProps){
  return (
    <div className=""> 
      <img 
        src={image}
        className="aspect-square h-full"
      ></img>
      <p>{name}</p>
    </div>
  )


}