import { RegisterForm } from "@/components/ui";
import Image from "next/image";

export default function () {
  return (
    <div
    className="bg-scroll bg-whiteBackground text-beige"
    style={{
      backgroundImage: `url('/contact/background.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      margin: 0,
      padding: 0,
     }}>

     <section className="px-6 text-left pt-40 ">
      <h2 className="text-3xl text-lavazzaBlue mb-6">Contact Us</h2>
      <span className="max-w-[12rem] px-4 py-3 flex gap-3 items-center cursor-pointer rounded-full border border-slate-beige hover:border-indigo-300 ">
        <Image src={'/logos/cellphone.png'} width={15} height={20} alt="Cellphone" />
        (562)-733-8300
      </span>

      <span className="mt-4 max-w-[14rem] px-3 py-3 flex gap-3 items-center cursor-pointer rounded-full border border-slate-beige hover:border-indigo-300 ">
        <Image src={'/logos/mail.png'} width={22} height={20} alt="Cellphone" />
        info@qargocoffee.com
      </span>
     </section>

     <section className="px-6 pt-8">
        <RegisterForm/>
     </section>

    </div>
  );
}