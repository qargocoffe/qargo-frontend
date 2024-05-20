import { BannerCategories } from "@/components/ui";
import { getCategories } from "@/utils";
import { Category } from '../../../interfaces/our-menu/category.interface';
import Image from "next/image";

export default async function () {


    //const categories = await getCategories();
    const categories = [{"slug":"lavazza-hot-classics"},
    {"slug":"fresh-and-cool"},{"slug":"tea"},
    {"slug":"seasonal"},{"slug":"lotus"},{"slug":"kids-and-pets"},
    {"slug":"taste-of-italy"},{"slug":"food"},{"slug":"grabd-and-go"}];
   

  return (
    <div>
      <h1 className="text-4xl text-lavazzaBlue text-center slide-in-top">Our Menu</h1>
      
     
      <section className="w-full text-focus-in">
          <section className="absolute w-full h-full flex items-center z-20">
              <figure className="ball">
                <Image src={'./our-menu/cubo.png'} width={90} height={90} alt="Cubo hielo"/>
              </figure>
              <figure className="ball">
                <Image src={'./our-menu/cubo.png'} width={90} height={90} alt="Cubo hielo"/>
              </figure>
              <figure className="ball">
                <Image src={'./our-menu/cubo.png'} width={90} height={90} alt="Cubo hielo"/>
              </figure>
          </section>
            <BannerCategories categories={categories} />
      </section>
    </div>
  );
}