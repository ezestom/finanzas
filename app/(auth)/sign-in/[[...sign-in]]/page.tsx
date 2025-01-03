import Image from 'next/image'
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

export default function Page() {
  return (
    <section className='min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 '>
      <div className='h-full  lg:flex flex-col justify-center items-center px-4'>
        <div className='text-center space-y-4 pt-16'>
          <h1 className='font-bold text-3xl text-[#2E2A47]'>
            Welcome Back!
          </h1>
          <p className='text-base text-[#7E8CA0]'>
            Log in or Create account to get back to your dahsboard
          </p>
        </div>
        <div className='flex justify-center items-center mt-8'>
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin text-muted-foreground' />
          </ClerkLoading>
        </div>
      </div>
      <div className='h-full bg-blue-600 hidden lg:flex items-center justify-center'>
        <Image
          src='/logo.svg'
          alt='Logo'
          width={100}
          height={100}
        />
      </div>
    </section>
  )
}
