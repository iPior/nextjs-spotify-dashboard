import { SignOutButton } from './buttons/SignOutButton'
import { getServerSession } from 'next-auth'
import { Button } from '@/components/shadcn-ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import authOptions from '@/app/api/auth/[...nextauth]/options'


export default async function Header() {
  const session = await getServerSession()
  
  return (
    <header className='flex justify-between items-center px-2 pt-4 pb-2'>
        <div className='flex h-full items-center'>
          {session && <img 
            src={session?.user.image}
            className="aspect-square h-12 rounded mr-2 border"  
            />}
          <h1 className="text-4xl font-bold">
            <span>SpotiDash</span>
            {session && 
              <span
                className='text-xl lowercase'
              >
                /{session?.user.name}
              </span>}
          </h1> 
        </div>
        <div className='flex'>
          <ThemeToggle />
          {session && <SignOutButton />}
        </div>
    </header>
  )
}
