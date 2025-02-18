"use client"
import DashboardContainer from '@/components/DashboardContainer'
// if error authrizing client

export default function error() {
  return (
    <div className="w-1/2 h-full p-1">
      <DashboardContainer>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-sm">Something went wrong</p>
      </div>
      </DashboardContainer>
    </div>
  )
}
