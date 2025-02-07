import { cn } from "@/lib/utils";

interface ChildProps {
  page: number; 
  setPage: (newValue: number) => void;
}

export default function RecentlyPlayedButtonGroup({ page, setPage }: ChildProps){
  const btnClass: string = "font-bold text-foreground py-1 px-2 rounded"

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="px-1 text-2xl font-bold">Recently Played</h1>
      </div>
      <div className="text-xs h-full flex items-center">
        <button 
          className={cn(btnClass, page === 1 ? "bg-accent" : "hover:text-accent hover:cursor-pointer")}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button 
          className={cn(btnClass, page === 2 ? "bg-accent" : "hover:text-accent hover:cursor-pointer")}
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button 
          className={cn(btnClass, page === 3 ? "bg-accent" : "hover:text-accent hover:cursor-pointer")}
          onClick={() => setPage(3)}
        >
          3
        </button>
        <button 
        className={cn(btnClass, page === 4 ? "bg-accent" : "hover:text-accent hover:cursor-pointer")}
          onClick={() => setPage(4)}
        >
          4
        </button>
        <button 
          className={cn(btnClass, page === 5 ? "bg-accent" : "hover:text-accent hover:cursor-pointer")}
          onClick={() => setPage(5)}
        >
          5
        </button>
        
      </div>
    </div>
  )
}
