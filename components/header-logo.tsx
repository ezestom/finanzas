import Link from 'next/link';
import Image from "next/image";


export const HeaderLogo = () => {
   return (
      <Link href="/">
         <div className='items-center hidden lg:flex -ml-2'>
            <Image src='/logo.svg' alt='Logo' width={75} height={75} />
            <p className='font-semibold text-white text-2xl'>
               Finance
            </p>
         </div>
      </Link>
   )
}