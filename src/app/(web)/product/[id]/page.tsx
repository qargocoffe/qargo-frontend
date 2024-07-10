import { Breadcrumb, NutritionalFacts, NutritionalItem, Warranty } from "@/components/ui";
import Image from "next/image";
import Link from 'next/link';

export default function ProductPage() {
  return (
    <div>
      {/* Breadcrumb*/}
        <Breadcrumb/>
        {/* Detail complete of product   */}
        <section className="px-7 md:flex md:w-desktop m-auto items-center gap-10">
          {/* Image of product*/}
          
          <div className="w-full md:w-3/5">
            <figure className="m-auto w-5/6 slide-in-right order-1">
              <Image src={'/products/main.png'} layout="responsive" width={50} height={50} alt="30"/>
            </figure>
              {/* Type content  of the product DEKSTOP  */}
              <div className="hidden md:block">
                <NutritionalItem />
                {/* Guarantee */}
                <div className="mt-6">
                  <Warranty />    
                </div>
              </div>
          </div>
          <div className="w-full  md:w-2/5">
           <div className="mb-4">
            <h3 className="text-lavazzaBlue tracking-wider text-center py-5 slide-in-left md:text-2xl ">CAFFE AMERICANO</h3>
            <p className="text-gray text-center w-5/6 m-auto slide-in-left ">A delicious and aromatic cup of strong Lavazza ¡Tierra! coffee with a strong kick and mellow aftertaste.</p>
            <Link href={'/'} className='text-center rounded-full bg-lavazzaBlue py-2 m-auto w-2/3 block mt-3'>
                  <span className='font-semibold  text-sm text-white'>
                    ORDER HERE
                  </span>
            </Link>
           </div>

            {/* Type content  of the product MOBILE  */}
            <div className="md:hidden">
              <NutritionalItem />
            </div>
            
          
            {/* Nutritional Facts   */}
            <NutritionalFacts/>
            {/* Guarantee */}
            <div className="md:hidden"> 
              <Warranty />
            </div>
         
          </div>
        </section>
    </div>
  );
}