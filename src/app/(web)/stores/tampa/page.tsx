import { DrinksSwiper, MenuIframe } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";



export default function TampaPage() {

  const drinks = [
    {
      title: "GUAVA JAVA LATE",
      description: "Inspired by the Big Guava nickname, a classic latte with sweet guava notes.",
      image: "/stores/drinks/image1.png"
    },
    {
      title: "COLORADO ROX FRAPPE",
      description: "Inspired by the Big Guava nickname, a classic latte with sweet guava notes.",
      image: "/stores/drinks/image2.png"
    },
    {
      title: "GUAVA JAVA LATE",
      description: "Inspired by the Big Guava nickname, a classic latte with sweet guava notes.",
      image: "/stores/drinks/image3.png"
    },
    {
      title: "GUAVA JAVA LATE",
      description: "Inspired by the Big Guava nickname, a classic latte with sweet guava notes.",
      image: "/stores/drinks/image4.png"
    },
  ]

  return (
    <div>
      <section 
        className="w-full min-w-full h-full min-h-[45rem] relative slide-in-top" 
        style={{
          backgroundImage: "url(/stores/initial.jpg)", 
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover" 
        }}
      ></section>

        <div className="md:flex lg:w-desktop lg:m-auto md:py-12">
            <section className="slide-in-left px-6">
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

          <section>
            <Image className="scroll-reveal mt-6" src="/stores/map.png" width={30} height={30} alt="Map" layout="responsive" />
          </section>
        </div>

      
        { /* Exclusive Drinks Swiper */ }
        <DrinksSwiper drinks={drinks} />
        
        { /* Menu Iframe */ }
        <MenuIframe url="https://e.issuu.com/embed.html?d=qcsantamonicamenu&amp;u=qargocoffee" />

      { /* Partners ORDER NOW */ }  
      <section className="lg:w-desktop lg:m-auto w-full">
        <h2 className="slide-in-left px-7 text-center uppercase text-xl tracking-widest font-semibold text-lavazzaBlue lg:text-2xl">
          ORDER NOW
        </h2>
        <div className="flex items-center justify-center gap-10 lg:gap-20 py-9 px-16 w-auto lg:w-1/4 lg:m-auto">
          <Image src={"/stores/doordash.png"} width={30} height={20} alt="Doordash"  layout="responsive" />
          <Image src={"/stores/grubhub.png"} width={30} height={20} alt="Grubhub"  layout="responsive" />
          <Image src={"/stores/uber-eats.png"} width={30} height={20} alt="Grubhub"  layout="responsive" />
        </div>
        <div className="m-auto text-center lg:my-12  max-w-[11rem] mt-4 p-3 bg-lavazzaBlue rounded-full">
          <Link className="text-white font-bold" href={"/"}>IN STORE PICK UP</Link>
        </div>
      </section>

      { /* Partners ORDER NOW */ }  
      <section 
        className="w-full h-full min-h-[15rem] mt-12 slide-in-top relative lg:w-desktop lg:m-auto" 
        style={{
          backgroundImage: "url(/stores/coffee.png)", 
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      >
        <div className="w-1/2 text-right uppercase absolute right-0 p-4 lg:top-8">
          <p className="text-lavazzaBlue tracking-widest font-semibold text-[13px] lg:text-lg lg:text-center">
            Don&apos;t miss out on our latest news and exclusive offers
          </p>
          <div className="m-auto text-center max-w-[9rem] mt-4 p-2 bg-lavazzaBlue rounded-full">
            <Link className="text-white font-bold" href={"/"}>SIGN UP</Link>
          </div>
        </div>
      </section>
      <section className="lg:w-desktop lg:m-auto">
        <h2 className="slide-in-left mb-6 px-7 text-center uppercase text-xl tracking-widest font-semibold text-lavazzaBlue lg:text-2xl">
          AS SEEN ON
        </h2>
        <div className="flex gap-6 items-center justify-around px-12 ">
          <Image src={"/stores/seen/image1.png"} width={26} height={20} alt="Seen on 1" layout="responsive" />
          <Image src={"/stores/seen/image2.png"} width={26} height={20} alt="Seen on 2" layout="responsive" />
          <Image src={"/stores/seen/image3.png"} width={26} height={20} alt="Seen on 3" layout="responsive" />
          <Image src={"/stores/seen/image4.png"} width={26} height={20} alt="Seen on 4" layout="responsive" />
          <Image src={"/stores/seen/image5.png"} width={26} height={20} alt="Seen on 5" layout="responsive" />
        </div>
        <p className="mt-6 text-center text-gray tracking-widest">
          AND OVER 400 NEWS SITES
        </p>
      </section>
    </div>
  );
}
