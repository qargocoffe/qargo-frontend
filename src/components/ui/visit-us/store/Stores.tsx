import React from 'react'
import Image from 'next/image';
import { StoreCollapse } from './StoreCollapse';

export const Stores = () => {
  return (
    <div>
        <section className="grid place-items-center relative top-[-6rem]">
              <StoreCollapse title={'Santa Monica Place'} isOpen={true} />
              <StoreCollapse title={'West Palm Beach - Clematis St.'} isOpen={true} />
              <StoreCollapse title={'Washington D.C. - Farragut'} isOpen={true} />
              <StoreCollapse title={'Fountain Valley - Newhope'} isOpen={true} />
              <StoreCollapse title={'San Jose - North Park'} isOpen={false} />
              <StoreCollapse title={'Canton Center Crossing'} isOpen={false} />
              <StoreCollapse title={'Reno - Victoria St.'} isOpen={false} />
              <StoreCollapse title={'Detroit - Woodward Ave.'} isOpen={false} />
            </section>
    </div>
  )
}
