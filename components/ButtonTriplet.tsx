'use client'

import { cn } from "@/lib/utils";

export default function CustomButton(
  extraClasses: string,
  func: (arg: string) => void,
  value: string,
){

  return (

      <div className="text-xs h-full flex items-center">
        <button 
          className={cn("font-bold tracking-widest uppercase text-white hover:text-green-600", extraClasses)}
          onClick={() => func("short_term")}
        >
          {value}
        </button>
      </div>
  )
}
