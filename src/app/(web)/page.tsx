import { BannerMobile } from "@/components/ui";
import { getBlogs } from "@/utils";
import { getHomePage } from "@/utils/homepage";
import Image from "next/image";
import { BannerHomepage } from "@/components/ui";

export default async function () {

  const blogs = await getBlogs(4);
  const homePage = await getHomePage();

  return (
    <div className="bg-ceramic">

      <BannerHomepage />
     <article style={{
       backgroundImage: `url('/home/background-gray.png')`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       margin: 0,
       padding: 0,
      }}>
     <section 
     className="w-100 flex justify-around items-center min-h-[17rem]">
        <img src="/home/coffee1.png" alt="chocolato" className="slide-in-left  w-[72%] left-0 h-auto block absolute" />
        <img src="/home/coffee2.png" alt="chocolato" className="slide-in-right  right-0 w-[52%] h-auto block absolute" />
      </section>
          <h2 className="px-7 py-5 text-2xl tracking-widest font-normal text-lavazzaBlue text-left">ITALY’S FINEST  <br />COFFEE & PASTRIES</h2>
          <div className='px-7 py-2 flex w-full text-center' >
              <p className="mt-4 mb-14 text-gray text-left">Capturing the essence of Italian tradition and standards, we redefine the essence of coffee culture with unique recipes, taken to a new level with the premium quality of Lavazza, and freshly baked Italian pastries, creating a wide spectrum of flavor profiles and textures.</p>
              <figure className="w-full">
                <Image className="mb-4" src={'/footer/coffee.png'} alt="Coffe" width={120} height={120} />
              </figure>
            </div>
        </article>
        <div className="reveal-scroll">
          <BannerMobile typeBanner='blog' data={blogs}/>
        </div>

        <div className="mt-6 flex justify-center">
        <Image className="mb-4" src={'/footer/coffee.png'} alt="Coffe" width={60} height={60} />
        </div>

    </div>
  );
}