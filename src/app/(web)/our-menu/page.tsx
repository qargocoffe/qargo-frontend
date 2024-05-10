import { BannerCategories } from "@/components/ui";
import { getCategories } from "@/utils";
import { title } from "process";
import { Category } from '../../../interfaces/our-menu/category.interface';

export default async function () {


    const categories = await getCategories();
   

  return (
    <div>
      <h1>Hello Page</h1>
      <section className="w-full">
            {JSON.stringify(categories)}

      </section>
    </div>
  );
}