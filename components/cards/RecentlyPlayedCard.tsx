import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils"

export default function RecentlyPlayedCard({
  className,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={cn('rounded lg:min-w-40 bg-card mr-2 border border-card-border group w-full', className)}>
      <img 
        src={image}
        alt={`Profile picture of ${name}`}
        className="aspect-square h-[85%] w-full rounded-t object-cover border-b border-card-border"
      ></img>
       <div className="h-[15%] w-full flex items-center justify-center px-1">
          <h2 className="text-sm truncate text-card-foreground font-semibold group-hover:text-accent transition duration-200 px-1">{name}</h2>
      </div>
    </div>
  )
}