import { cn } from "@/lib/utils";

interface ChildProps {
  header: string;
  term: string;
  setTerm: (newValue: string) => void;
}

export default function ButtonTriplet(
  {header, term, setTerm} : ChildProps
){
  const btnClass: string = "font-bold uppercase text-container-foreground p-1 px-2 rounded border ml-1"

  return (
    <div className="h-[20%] sm:h-[15%] 2xl:h-[10%]! 4xl:h-[5%]! pb-2 flex flex-col sm:flex-row md:flex-col xl:flex-row justify-center sm:justify-between md:justify-center xl:justify-between items-center">
      <div>
          <h1 className="text-2xl font-extrabold tracking-tight uppercase text-container-foreground">{header}</h1>
        </div>
      <div className="text-xxs flex items-center">
        <button 
            className={cn(btnClass, term === "short_term" ? "bg-accent": "hover:text-accent hover:cursor-pointer bg-card")}
            onClick={() => setTerm("short_term")}
          >
            3 Months
          </button>
          <button 
            className={cn(btnClass, term === "medium_term" ? "bg-accent": "hover:text-accent hover:cursor-pointer bg-card")}
            onClick={() => setTerm("medium_term")}
          >
            6 Months
          </button>
          <button 
            className={cn(btnClass, term === "long_term" ? "bg-accent": "hover:text-accent hover:cursor-pointer bg-card")}
            onClick={() => setTerm("long_term")}
          >
            1 Year
          </button>
      </div>
    </div>
  )
}
