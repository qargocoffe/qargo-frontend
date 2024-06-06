import Image from "next/image";
import Link from "next/link";

export default function TampaPage() {
  return (
    <div>
       <section className="w-full h-full min-h-[30rem] top-[-4rem] relative slide-in-top" 
        style={{
        backgroundImage: "url(/stores/initial.png)", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}>
    </section>
    <section className="slide-in-left px-6 top-[-9rem] relative">
        <h1 className="text-lavazzaBlue tracking-widest font-semibold">TAMPA</h1>
         <article className="flex items-start gap-6 mb-6 mt-8">
            <Image src={"/logos/ubication.png"} width={30} height={20} alt="Phone" />
            <p className="text-gray w-2/3">
            223 N Westshore Blvd. Unit  # FC209 Tampa, FL 33607
            </p>
        </article>
        <article className="flex items-center gap-6">
            <Image src={"/logos/phone.png"} width={26} height={20} alt="Phone" />
            <a href="tel:9051290512" className="text-lavazzaBlue underline w-1/2">
            (562)-733-8300
            </a>
        </article>
    </section>
    <section >
      <Image className="scroll-reveal top-[-6rem] relative" src="/stores/map.png" width={30} height={30} alt="Map" layout="responsive" />
        <h2 className="top-[-2rem] relative slide-in-left px-7 text-center mb-7 uppercase text-xl tracking-widest font-semibold text-lavazzaBlue">
          EXCLUSIVE DRINKS
        </h2>
    </section>
    <iframe className="w-full min-h-[409px] mb-9" allow={'clipboard-write'} 
      sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
     allowFullScreen={true} src="https://e.issuu.com/embed.html?d=qcsantamonicamenu&amp;u=qargocoffee"></iframe>

    <section>
        <h2 className="slide-in-left px-7 text-center  uppercase text-xl tracking-widest font-semibold text-lavazzaBlue">
            ORDER NOW
        </h2>
        <figure className="flex items-center gap-10 py-9 px-16">
          <Image src={"/stores/doordash.png"} width={26} height={20} alt="Phone" layout="responsive" />
          <Image src={"/stores/grubhub.png"} width={26} height={20} alt="Phone" layout="responsive" />
        </figure>
        <div className="m-auto text-center max-w-[11rem] mt-4 p-3 bg-lavazzaBlue rounded-full">
          <Link className="text-white font-bold" href={"/"}>IN STORE PICK UP</Link>
        </div>
    </section>
    <section className="w-full h-full min-h-[15rem] mt-12 slide-in-top relative" 
        style={{
        backgroundImage: "url(/stores/coffee.png)", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}>
        <div className="w-1/2 text-right uppercase absolute right-0 p-4">
          <p className="text-lavazzaBlue tracking-widest font-semibold text-[13px] ">Don"t miss out on our latest news and exclusive offers</p>
            <div className="m-auto text-center max-w-[9rem] mt-4 p-2 bg-lavazzaBlue rounded-full">
              <Link className="text-white font-bold" href={"/"}>SIGN UP</Link>
            </div>
        </div>
      </section>
      <section>
          <h2 className="slide-in-left mb-6 px-7 text-center  uppercase text-xl tracking-widest font-semibold text-lavazzaBlue">
              AS SEEN ON
          </h2>
          <div className="flex gap-6 items-center justify-around px-12">
            <Image src={"/stores/seen/image1.png"} width={26} height={20} alt="Phone" layout="responsive" />
            <Image src={"/stores/seen/image2.png"} width={26} height={20} alt="Phone" layout="responsive" />
            <Image src={"/stores/seen/image3.png"} width={26} height={20} alt="Phone" layout="responsive" />
            <Image src={"/stores/seen/image4.png"} width={26} height={20} alt="Phone" layout="responsive" />
            <Image src={"/stores/seen/image5.png"} width={26} height={20} alt="Phone" layout="responsive" />
          </div>
          <p className="mt-6 text-center text-gray tracking-widest">
            AND OVER 400 NEWS SITES
          </p>
      </section>

    
    </div>
  );
}