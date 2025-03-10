import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils"

export default function RecentlyPlayedCard({
  className,
  image,
  name,
}:  cardProps){
  return (
    <div className={cn('rounded bg-card border border-card-border group w-36 sm:w-44 lg:w-40 2xl:w-44! h-full', className)}>
      <img 
        src={image}
        alt={`Profile picture of ${name}`}
        className="rounded-t border-b border-card-border w-full h-5/6"
      />
       <div className="w-full flex items-center justify-center px-1 py-2 lg:py-1 h-1/6">
          <h2 className="text-sm truncate text-card-foreground font-semibold group-hover:text-accent transition duration-200">{name}</h2>
      </div>
    </div>
  )
}