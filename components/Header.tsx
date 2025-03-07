import { SignOutButton } from './buttons/SignOutButton'
import { getServerSession } from 'next-auth'
import { ThemeToggle } from '@/components/ThemeToggle'


export default async function Header() {
  const session = await getServerSession()
  
  return (
    <header className='flex flex-wrap items-center justify-center xs:justify-between px-1 pt-4 pb-2 h-1/12'>

        {session &&
        <div className='flex items-center justify-center mb-2 xs:justify-start xs:mb-0 w-full xs:w-auto'>
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
        <div className='flex items-center justify-center w-full xs:w-auto xs:justify-end'>
          <ThemeToggle />
          {session && <SignOutButton />}
        </div>
    </header>
  )
}
