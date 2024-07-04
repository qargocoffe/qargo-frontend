import { BannerMobile } from "@/components/ui";
import { getBlogs } from "@/utils";
import { getHomePage } from "@/utils/homepage";
import Image from "next/image";
import { BannerHomepage } from "@/components/ui";

export default async function HomePage() {

  const blogs = await getBlogs(4);
  const homePage = await getHomePage();

  return (
    <div className="bg-ceramic w-full" style={{
      backgroundImage: "url(/home/background-gray.png)", 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      {/* Swiper Banners Home */}
      <BannerHomepage />

      {/* Croazan and white coffe */}
        <section className="md:w-desktop md:m-auto" >
          <div className="w-full flex justify-between items-center">
            <figure className="slide-in-left">
              <Image src={'/home/coffee1.png'} width={300} height={200} alt="Name" className="md:w-[600px]"  />
        
            </figure>
            <figure className="slide-in-right">
              <Image src={'/home/coffee2.png'} width={160} height={160} alt="Name"  className="md:w-[400px]" />
            </figure>
          </div>
          <h2 className="px-7 text-2xl tracking-widest font-normal text-lavazzaBlue text-left md:text-4xl">ITALY’S FINEST  <br />COFFEE & PASTRIES</h2>
          <div className='px-7 py-2 flex w-full text-center' >
              <p className="mt-4 mb-14 text-gray text-left md:text-xl">Capturing the essence of Italian tradition and standards, we redefine the essence of coffee culture with unique recipes, taken to a new level with the premium quality of Lavazza, and freshly baked Italian pastries, creating a wide spectrum of flavor profiles and textures.</p>
              <figure className="ml-2 w-full">
                <Image className="mb-4" src={'/home/coffee-sm.png'} alt="Coffe" width={120} height={120} />
              </figure>
            </div>
        </section>

        {/* Banner blogs */}
        <div className="reveal-scroll">
          <BannerMobile typeBanner='blog' data={blogs}/>
        </div>
        {/* Coffe seed  */}
        <div className="mt-6 flex justify-center">
          <Image className="mb-4" src={'/footer/coffee.png'} alt="Coffe" width={60} height={60} />
        </div>

    </div>
  );
}