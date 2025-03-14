import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils";
import Image from 'next/image';

export default function TrackCard({
  className,
  index,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={cn('flex w-full mb-1 px-1 rounded transition duration-500 ease-in-out transform hover:-translate-x-4 group ', className)}>
      <h1 className="font-bold text-card-foreground transition-opacity duration-500 group-hover:opacity-0 w-8 ">{index}</h1> 
      <div className="flex w-full rounded border border-card-border truncate group/inner bg-card">
        <Image 
          src={image}
          height={640}
          width={640}
          alt={`Profile picture of ${name}`}
          className="aspect-square w-1/5 rounded-l max-h-18 object-cover mr-2 border-r border-card-border"
        />
        <div className="w-full flex-1 min-w-0 pr-2 text-card-foreground">
          <h2 className="text-2xl truncate font-bold group-hover/inner:text-accent transition duration-200">{name}</h2>
          <h3 className="text-md truncate transition duration-500 leading-4">{artist}</h3>
        </div>
        </div>
    </div>
  )
}