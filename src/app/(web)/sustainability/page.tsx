import { Descriptive } from "@/components/ui";
import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <div>
      <section className='w-full h-full min-h-[30rem] relative slide-in-top' 
        style={{
        backgroundImage: "url(/sustainability/initial.png)", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
            <div className="text-ceramic py-9 px-5 slide-in-left flex absolute bottom-0 flex-col justify-start items-start">
              <h1 className="text-5xl ">Sustainabilty</h1>
              <p className="w-4/5 text-sm md:text-lg md:w-1/3">At Qargo Coffee, every cup is brewed with Lavazza La Reserva de ¡Tierra!, supporting a sustainable future for communities worldwide and the environment.</p>
            </div>
        </section>

        <section className="py-6 lg:my-7 flex justify-center items-center lg:w-desktop lg:m-auto md:bg-contain md:bg-no-repeat 
        lg:rounded-xl lg:border-solid lg:border-2 lg:border-gray lg:shadow-xl"  style={{
          backgroundImage: 'url(/sustainability/background.png)'
        }}>
          <figure>
            <Image src={'/sustainability/lareserva.png'}
             layout="responsive" 
             width={600} 
             height={600} 
             className="slide-in-left md:w-full"
             alt="Bolsa" />
          </figure>
          <div className="w-2/3 md:w-full p-8 text-right slide-in-right">
            <h3 className="text-lavazzaBlue text-lg font-semibold md:text-3xl">Lavazza La Reserva
            de ¡Tierra!</h3>
            <p className="text-gray mt-4 md:text-lg">
            Lavazza La Reserva de ¡Tierra! is a sustainable blend collection that merges Italian tradition and craftsmanship with social responsibility, offering prime quality coffee with complex and diverse flavor profiles.

 It fosters the well-being of producers and the environment, which is why we’ve made it the center of our products.
            </p>
          </div>
          
        </section>

        <Descriptive
          title="The Lavazza Foundation" 
          image="/sustainability/descriptive.png"
          description="The Lavazza Foundation is a non-profit organization that promotes sustainability in multiple
           coffee-producing communities worldwide. Since 2004, the Foundation has been responsible for numerous projects that have enhanced coffee productivity and quality while paving the way for a more sustainable world." 
          />
    </div>
  );
}