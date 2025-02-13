import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils"

export default function RecentlyPlayedCard({
  className,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={cn('rounded px-1 lg:min-w-40', className)}>
      <img 
        src={image}
        alt={`Profile picture of ${name}`}
        className="aspect-square h-[90%] w-full rounded object-cover border border-opacity-20"
      ></img>
      <div className="h-[10%]">
        <h2
          className="text-sm truncate"
        >{name}</h2>
        {/* <h2>{artist}</h2> */}
      </div>
    </div>
  )
}