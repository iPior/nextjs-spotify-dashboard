export default function DashboardContainer({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div
          className='h-full w-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
        >
            {children}
        </div>
  )
}
