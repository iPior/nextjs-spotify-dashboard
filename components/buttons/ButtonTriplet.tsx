import { cn } from "@/lib/utils";

interface ChildProps {
  header: string;
  term: string;
  setTerm: (newValue: string) => void;
}

export default function ButtonTriplet(
  {header, term, setTerm} : ChildProps
){
  const btnClass: string = "font-bold tracking-widest uppercase text-foreground p-1 px-2 rounded"

  return (
    <div className="mb-4 px-1 flex justify-between items-center">
      <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase bg-accentrounde">{header}</h1>
        </div>
      <div className="text-xxs h-full flex items-center">
        <button 
            className={cn(btnClass, term === "short_term" ? "bg-accent": "hover:text-accent hover:cursor-pointer")}
            onClick={() => setTerm("short_term")}
          >
            3 Months
          </button>
          <button 
            className={cn(btnClass, term === "medium_term" ? "bg-accent": "hover:text-accent hover:cursor-pointer")}
            onClick={() => setTerm("medium_term")}
          >
            6 Months
          </button>
          <button 
            className={cn(btnClass, term === "long_term" ? "bg-accent": "hover:text-accent hover:cursor-pointer")}
            onClick={() => setTerm("long_term")}
          >
            1 Year
          </button>
      </div>
    </div>
  )
}
