import React from 'react'
import Image from 'next/image';
import { StoreCollapse } from './StoreCollapse';

export const Stores = () => {
  return (
    <div>
        <section className="grid place-items-center relative top-[-6rem]">
              <StoreCollapse/>
              <StoreCollapse/>
              <StoreCollapse/>
              <StoreCollapse/>
            </section>
    </div>
  )
}
