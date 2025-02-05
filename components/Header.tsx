import { SignOutButton } from './SignOutButton'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/api/auth/[...nextauth]/options'


export default async function Header() {
  const session = await getServerSession(authOptions)
  
  return (
    <header className='flex justify-between items-center px-2 pt-4 pb-2'>
        <h1 className="text-4xl font-bold">
          <span>SpotiDash</span>
          {session && 
            <span
              className='text-xl lowercase'
            >
              /{session?.user.name}
            </span>}
        </h1>
      {/* <Button> Dark Mode </Button> */}
      {session && <SignOutButton />}
    </header>
  )
}
