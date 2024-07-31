'use client';

import { Worker } from '@/interfaces';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export const WorkerCard = ({ thumbnail, name, position }: Worker) => {
  const [displayImage, setDisplayImage] = useState(false);

  return (
    <div 
      className='w-full text-center grayscale hover:grayscale-0 cursor-pointer'
      onMouseEnter={() => setDisplayImage(true)}
      onMouseLeave={() => setDisplayImage(false)}
    > 
      {thumbnail && (
        <Image 
        src={process.env.DOMAIN_API  + thumbnail.url} 
        width={200} 
        height={200} 
        
        alt='Image' 
        layout='responsive'
      />
      )}
      <div
        className={clsx(
          "w-full hidden md:h-[100px] md:flex flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-white/20 md:absolute md:bottom-0 py-8 transition-opacity duration-300",
          {
            "opacity-100 visible": displayImage,
            "opacity-0 invisible": !displayImage,
          }
        )}
      >
        <h3 className='text-white text-lg'>{name}</h3>
        <p className='text-white text-sm'> {position}</p>
      </div>
    </div>
  );
};
