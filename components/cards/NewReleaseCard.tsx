import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils";

export default function NewReleaseCard({
  className,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={cn('rounded mb-4 border', className)}>
      <img 
        src={image}
        alt={`Profile picture of ${name}`}
        className="aspect-square w-full rounded object-cover border border-opacity-20"
      ></img>
      <div className="">
        <h2>{artist}</h2>
        <h2
          className="text-sm truncate"
        >{name}</h2>
      </div>
    </div>
  )
}