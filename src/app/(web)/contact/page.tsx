import { BoxInfo, RegisterForm } from "@/components/ui";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div
    className="bg-scroll bg-whiteBackground text-beige bg-contain md:bg-cover bg-no-repeat" style={{backgroundImage: `url('/contact/background.png')`,}}>

     <section className="pl-6 text-left pt-20 flex items-center md:w-desktop m-auto">
      <div>
        <h2 className="slide-in-left text-3xl text-lavazzaBlue mb-6 md:text-3xl">Contact Us</h2>
        <p className="slide-in-left mb-9  text-left md:text-lg">
        Any questions or feedback? We’re glad to hear from you! Just fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        {/*Hidden for cellphones and tablets  */}
        <div className="hidden md:block">
          <BoxInfo/>
        </div>
      </div>

      <figure>
        <Image src={'/contact/glass.png'} width={800} height={800} alt="Cellphone" />
     </figure>
     </section>

     <section className="slide-in-left px-6 relative top-[-3rem] md:top-[-15rem] md:w-desktop m-auto">
        <div className="mb-12 md:hidden">
          <BoxInfo/>
        </div>
        <div className=" md:w-1/2">
          <RegisterForm/>
        </div>
     </section>

    </div>
  );
}