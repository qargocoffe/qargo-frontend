
import React from 'react'
import { WorkerCard } from './WorkerCard'
import { Worker } from '@/interfaces'


interface Props {
  workers: Worker[]
}

export const TeamContainer = ({workers}: Props) => {
  return (
    <section className='md:w-desktop m-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5  relative md:top-0'>
         {workers.map((worker) => (
                <div key={worker.id}>        
                    <WorkerCard {...worker} />
                </div>
          ))}
    </section>
  )
}
