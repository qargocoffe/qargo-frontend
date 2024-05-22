import { BannerCategories } from "@/components/ui";
import { getCategories } from "@/utils";
import { Category } from '../../../interfaces/our-menu/category.interface';
import Image from "next/image";

export default async function () {
    //const categories = await getCategories();
    const categories = [
      {
          "slug": "lavazza-hot-classics",
          "image": "/our-menu/image4.png"
      },
      {
          "slug": "fresh-and-cool",
          "image": "/our-menu/image5.png"
      },
      {
          "slug": "tea",
          "image": "/our-menu/image6.png"
      },
      {
          "slug": "seasonal",
          "image": "/our-menu/image7.png"
      },
      {
          "slug": "lotus",
          "image": "/our-menu/image8.png"
      },
      {
          "slug": "kids-and-pets",
          "image": "/our-menu/image9.png"
      },
      {
          "slug": "taste-of-italy",
          "image": "/our-menu/coffee.png"
      },
  ];
   

  return (
    <div>
      <h1 className="text-4xl text-lavazzaBlue text-center slide-in-top">Our Menu</h1>
      <section className="w-full text-focus-in">
          
            <BannerCategories categories={categories} />
      </section>
    </div>
  );
}