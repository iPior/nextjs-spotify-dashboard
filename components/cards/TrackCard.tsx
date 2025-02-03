import { cardProps } from "@/types/types"

export default function TrackCard({
  className,
  index,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={className}>
      <h1>{index}</h1> 
      
      <img 
        src={image}
        alt={`Profile picture of ${name}`}
        className="aspect-square w-1/5 rounded max-h-60 object-cover mx-2 "
      ></img>
      <div
        className=""
      >
        <h2
          className="text-xl"
        >{name}</h2>
        <h2>{artist}</h2>
      </div>
    </div>
  )
}