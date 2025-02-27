import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function NewReleaseCard({
  className,
  image,
  name,
  artist,
  type,
  release_date
}:  cardProps){
  return (
    <div className={cn('rounded mb-2 border border-card-border bg-card group h-full text-center', className)}>
        <img 
          src={image}
          alt={`Profile picture of ${name}`}
          className="rounded-t border-b border-card-border border-opacity-20"
        />

        {/* <div className="mb-2 group/inner"> */}
        <h2 className="text-xl font-bold leading-none py-2 text-card-foreground group-hover:text-accent transition duration-200">{name}</h2>
        <h3 className="text-sm transition text-card-foreground duration-500 leading-2 mb-2">{artist}</h3>
        {/* <h3 className="text-sm transition text-card-foreground duration-500 leading-2 mb-2">{type}</h3> */}
        {/* <h3 className="text-sm transition text-card-foreground duration-500 leading-2 mb-2">{release_date}</h3> */}
        {/* </div> */}
    </div>
  )
}