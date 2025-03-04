import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils";

export default function NewReleaseCard({
  className,
  image,
  name,
  artist,
  type,
  release_date
}:  cardProps){
  return (
    <div className={cn('rounded mb-2 border border-card-border bg-card group text-center w-36 sm:w-40   h-full', className)}>
        <img 
          src={image}
          alt={`Profile picture of ${name}`}
          className="rounded-t border-b border-card-border "
        />

        {/* <div className="group/inner "> */}
          <h2 className="text-lg truncate font-bold leading-none py-2 px-1 text-card-foreground group-hover:text-accent transition duration-200">{name}</h2>
          <h3 className="text-sm transition text-card-foreground duration-500 leading-2 mb-2">{artist}</h3>
        {/* <h3 className="text-sm transition text-card-foreground duration-500 leading-2 mb-2">{type}</h3> */}
        {/* <h3 className="text-sm transition text-card-foreground duration-500 leading-2 mb-2">{release_date}</h3> */}
        {/* </div> */}
    </div>
  )
}