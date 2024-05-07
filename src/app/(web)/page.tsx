import { BannerMobile } from "@/components/ui";
import { getBlogs } from "@/utils";
import { getHomePage } from "@/utils/homepage";
import Image from "next/image";
import { BannerHomepage } from "@/components/ui";

export default async function () {

  const blogs = await getBlogs(4);
  const homePage = await getHomePage();

  return (
    <div className="bg-ceramic text-sm">

      <BannerHomepage />
     <article>
          <Image className="w-full" src={ 'http://localhost:1337' + homePage?.picture.data.attributes.url } alt="Coffe" width={424} height={500} />
          <h2 className="px-7 py-5 text-xl text-lavazzaBlue text-left">{homePage?.title}</h2>
          <div className='px-7 py-2 flex w-full text-center' >
              <p className="mt-4 text-gray text-left">{homePage?.description}</p>
              <figure className="w-90">
                <Image className="mb-4" src={'/footer/coffee.png'} alt="Coffe" width={120} height={120} />
              </figure>
            </div>
        </article>
        <BannerMobile typeBanner='blog' data={blogs}/>

    </div>
  );
}