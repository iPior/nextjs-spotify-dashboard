import { cardProps } from "@/types/types"

export default function NewReleaseCard({
  className,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={className}>
      <img 
        src={image}
        alt={`Profile picture of ${name}`}
        className="aspect-square h-5/6 w-full rounded object-cover border border-opacity-20"
      ></img>
      <div className="">
        <h2
          className="text-sm truncate"
        >{name}</h2>
        {/* <h2>{artist}</h2> */}
      </div>
    </div>
  )
}