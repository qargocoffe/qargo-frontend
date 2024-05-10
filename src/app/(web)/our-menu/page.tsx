import { BannerCategories } from "@/components/ui";
import { getCategories } from "@/utils";
import { Category } from '../../../interfaces/our-menu/category.interface';

export default async function () {


    //const categories = await getCategories();
    const categories = [{"slug":"lavazza-hot-classics"},
    {"slug":"fresh-and-cool"},{"slug":"tea"},
    {"slug":"seasonal"},{"slug":"lotus"},{"slug":"kids-and-pets"},
    {"slug":"taste-of-italy"},{"slug":"food"},{"slug":"grabd-and-go"}];
   

  return (
    <div>
      <h1 className="text-4xl text-lavazzaBlue text-center">Our Menu</h1>
      <section className="w-full">
            <BannerCategories categories={categories} />
      </section>
    </div>
  );
}