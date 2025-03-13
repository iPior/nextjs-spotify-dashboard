import { SignOutButton } from './buttons/SignOutButton'
import { getServerSession } from 'next-auth'
import { ThemeToggle } from '@/components/ThemeToggle'
import Image from 'next/image';


export default async function Header() {
  const session = await getServerSession()
  
  return (
    <header >
      {session &&
        <div className='flex flex-wrap items-center justify-center xs:justify-between px-1 pt-4 pb-2 lg:h-1/12'>
          <div className='flex'>
            <Image 
              src={session?.user.image}
              className="aspect-square h-12 rounded mr-2 border border-card-border" 
              alt="Profile Picture"
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
          <div className='flex items-center justify-center w-full xs:w-auto xs:justify-end'>
            <ThemeToggle />
            <SignOutButton />
          </div>    
        </div>
      }
    </header>
  )
}
