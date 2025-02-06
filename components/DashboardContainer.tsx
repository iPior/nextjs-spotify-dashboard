import { Suspense } from "react"
import { cn } from "@/lib/utils";
export default function DashboardContainer({
    className,
    children,
  }: Readonly<{
    children: React.ReactNode;
    className?: string;
  }>) {
    return (
      <div
          className={cn('h-full w-full p-4 rounded bg-clip-padding backdrop-filter backdrop-blur-xs bg-black/10 border', className)}
          >
          <Suspense 
            fallback={
              <div className="flex items-center justify-center">
                Loading component...
              </div>
            }
          >  
            {children}
          </Suspense>
      </div>
  )
}
