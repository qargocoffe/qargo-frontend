'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';


export const Breadcrumb = () => {

  const router = useRouter();

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back(); // Navigate back
    } else {
      router.push('/'); // If no history, navigate to home
    }
  };


  return (
    <div className='flex gap-4 items-center p-5 slide-in-left' onClick={handleGoBack} >
        <figure className=''>
            <Image src={'/logos/arrow-left.png'}
                                width={10}
                                alt="Arrow down"
                                height={11}/>
        </figure>
        <p className='text-lavazzaBlue tracking-wider'>BACK TO OUR MENU</p>
    </div>
  )
}
