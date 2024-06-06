import { Descriptive } from "@/components/ui";

export default function () {
  return (
    <div>
      <section className='w-full h-full min-h-[30rem] top-[-6rem] relative slide-in-top' 
        style={{
        backgroundImage: "url(/sustainability/initial.png)", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
            <div className="text-ceramic py-9 px-5 slide-in-left flex absolute bottom-0 flex-col justify-start items-start">
              <h1 className="text-5xl">Sustainabilty</h1>
              <p className="w-4/5 text-sm">At Qargo Coffee, every cup is brewed with Lavazza La Reserva de ¡Tierra!, supporting a sustainable future for communities worldwide and the environment.</p>
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