import { cardProps } from "@/types/types"
import { cn } from "@/lib/utils";

export default function ArtistCard({
  className,
  index,
  image,
  name,
  genres,
}:  cardProps){
   const capitalizedGenres = genres?.length ? genres.map(genre => 
    genre.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  ) : ["Pop"]
  const genresString = capitalizedGenres?.join(", ")
  return (
    <div className={cn('flex w-full mb-1 px-1 rounded transition duration-500 ease-in-out transform hover:cursor-pointer hover:-translate-x-4 group', className)}>
      <h1 className="font-bold text-card-foreground  transition-opacity duration-500 group-hover:opacity-0 w-8 ">{index}</h1> 
      <div className="flex w-full rounded border border-card-border truncate group/inner bg-card">
        <img 
          src={image}
          alt={`Profile picture of ${name}`}
          className="aspect-square w-1/5 rounded-l max-h-18 object-cover mr-2 border-r border-card-border"
        ></img>
        <div className="w-full flex-1 min-w-0 pr-2 text-card-foreground ">
          <h2 className="text-2xl font-bold group-hover/inner:text-accent transition duration-200">{name}</h2>
          <h3 className="text-md truncate transition duration-500 leading-4">{genresString}</h3>
        </div>
      </div>
    </div>
  )
}