import { Breadcrumb, NutritionalFacts, NutritionalItem } from "@/components/ui";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div>
      {/* Breadcrumb*/}
        <Breadcrumb/>
        {/* Detail complete of product   */}
        <section className="px-7">
          {/* Image of product*/}
          <figure className="m-auto w-5/6 slide-in-right">
            <Image src={'/products/main.png'} layout="responsive" width={50} height={50} alt="30"/>
          </figure>
          <h3 className="text-lavazzaBlue tracking-wider text-center py-5 slide-in-left">CAFFE AMERICANO</h3>
          <p className="text-gray text-center w-5/6 m-auto slide-in-left ">A delicious and aromatic cup of strong Lavazza ¡Tierra! coffee with a strong kick and mellow aftertaste.</p>
          
          {/* Type content  of the product   */}
          <NutritionalItem />
          {/* Nutritional Facts   */}
          <NutritionalFacts/>
        </section>
    </div>
  );
}