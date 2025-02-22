import { SignOutButton } from './buttons/SignOutButton'
import { getServerSession } from 'next-auth'
import { ThemeToggle } from '@/components/ThemeToggle'


export default async function Header() {
  const session = await getServerSession()
  
  return (
    <header className='flex justify-between items-center p-1'>

        {session &&
        <div className='flex h-full items-center'>
           <img 
            src={session?.user.image}
            className="aspect-square h-12 rounded mr-2 border border-card-border"  
            />
          <h1 className="text-4xl font-bold">
            <span>SpotiDash</span>
              <span
                className='text-xl lowercase'
              >
                /{session?.user.name}
              </span>
          </h1> 
        </div>
        }
        {!session && <div></div>}
        <div className='flex'>
          <ThemeToggle />
          {session && <SignOutButton />}
        </div>
    </header>
  )
}
