import { TeamContainer } from "@/components/ui";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div>
      <section className='w-full h-full min-h-[30rem] slide-in-top' 
        style={{
        backgroundImage: "url(/team/initial.png)", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
            <div className="text-ceramic py-9 px-5 slide-in-left flex absolute bottom-0 flex-col justify-start items-start">
              <h1 className="text-6xl">Our <br />Team</h1>
              <p className="w-3/5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </section>
        <TeamContainer/>
    </div>
  );
}