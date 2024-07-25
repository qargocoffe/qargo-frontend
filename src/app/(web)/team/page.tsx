import { TeamContainer } from "@/components/ui";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div>
      <section className='w-full h-full min-h-auto  slide-in-top relative' >
            <Image src={'/team/initial.png'} alt={'Order'} width={30} height={30 } layout="responsive" className="md:hidden" />
            <Image src={'/team/initial-desktop.png'} alt={'Order'} 
            width={30} height={30 }
           layout="responsive"
          className="w-full hidden md:block " />
            <div className="text-ceramic py-9 px-5 slide-in-left flex absolute bottom-0 flex-col justify-start items-start">
              <h1 className="text-6xl md:text-8xl">Our <br />Team</h1>
              <p className="w-full lg:3/5 text-sm md:text-lg md:w-1/3 text-whiteBackground md:text-white">
              Meet the backbone of Qargo Coffee, a family of expert creators throughout multiple fields, all dedicated to set a new coffee standard..
              </p>
            </div>
        </section>
        <TeamContainer/>
    </div>
  );
}