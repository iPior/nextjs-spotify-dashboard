import DashboardContainer from "@/components/DashboardContainer";

export default function Loading() {
  return (
    <div className="w-full h-full p-1">
      <DashboardContainer>
        <div className="flex flex-col items-center justify-center h-full">Loading...</div>
      </DashboardContainer>
    </div>
  )
}