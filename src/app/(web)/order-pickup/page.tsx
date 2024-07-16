import { ThumbnailContainer } from "@/components/ui";
import Image from "next/image";

export default function OrderPage() {
  return (
    <div>
      <section className='w-full h-full min-h-[25rem] relative slide-in-top md:min-h-desktop bg-no-repeat ' >   
        <Image src={'/order/initial.png'} alt={'Order'} width={30} height={30 } layout="responsive" className="md:hidden" />
        <Image src={'/order/initial-desktop.png'} alt={'Order'} 
           layout="fill"
          objectFit="cover"
          className="w-full hidden md:block " />
            <div className="text-lavazzaBlue py-2 px-5 slide-in-left flex absolute bottom-[4rem] right-0 flex-col justify-start items-start">
              <h1 className="text-4xl">Order <br />Pickup</h1>
            </div>
        </section>

        <section className="mt-5">
          <p className="text-gray  px-7 text-center md:text-lg m-auto md:w-1/2">
                We are ready to take your order anywhere you are!
                <br />
                <br />
                  Dive into our incredible menu packed with irresistible Lavazza Coffee drinks, delicious Bindi pastries, and multiple grab-and-go options. Whether you crave an iced latte, bold espresso, or refreshing cold brew, we’ve got the perfect brew for you to taste greatness. Just customize your order to match your coffee cravings!
                  <br />
                  <br />
                  Don’t miss out on this epic coffee adventure and place your order today at Qargo Coffee!
          </p>
        </section>
        <section className="lg:w-desktop lg:m-auto">
            <h2 className="slide-in-left px-7 text-center mb-5 uppercase text-xl tracking-widest font-semibold text-lavazzaBlue md:text-2xl md:mt-12">
                Select your nearest store to place your order:
            </h2>
            <ThumbnailContainer/>
        </section>
    </div>
  );
}