import { Suspense } from "react"
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/Loading";
export default function DashboardContainer({
    className,
    children,
  }: Readonly<{
    children: React.ReactNode;
    className?: string;
  }>) {
    return (
      <div
          className={cn('h-full w-full p-4 rounded backdrop-blur-xs bg-container/10 border container', className)}
          >
          <Suspense 
            fallback={ <LoadingScreen />}
          >  
            {children}
          </Suspense>
      </div>
  )
}
