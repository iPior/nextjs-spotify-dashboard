import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils";

export default function TrackCard({
  className,
  index,
  image,
  name,
  artist,
}:  cardProps){
  return (
    <div className={cn('flex w-full mb-1 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4 group ', className)}>
      <h1 className="font-bold text-primary transition-opacity duration-500 group-hover:opacity-0 w-8 ">{index}</h1> 
      <div className="flex w-full rounded border-opacity-2 truncate group/inner bg-card">
        <img 
          src={image}
          alt={`Profile picture of ${name}`}
          className="aspect-square w-1/5 rounded-l max-h-18 object-cover mr-2 border border-opacity-20"
        ></img>
        <div className="w-100">
          <h2 className="text-2xl font-bold text-primary group-hover/inner:text-accent transition duration-200">{name}</h2>
          <h3 className="text-lg transition duration-500 leading-4">{artist}</h3>
        </div>
        </div>
    </div>
  )
}