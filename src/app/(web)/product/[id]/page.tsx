import { Breadcrumb } from "@/components/ui";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div>
        <Breadcrumb/>
        <section className="px-7">
          <figure className="m-auto w-5/6">
            <Image src={'/products/main.png'} layout="responsive" width={50} height={50} alt="30"/>
          </figure>
          <h3 className="text-lavazzaBlue tracking-wider text-center py-5">CAFFE AMERICANO</h3>
          <p className="text-gray text-center w-5/6 m-auto ">A delicious and aromatic cup of strong Lavazza ¡Tierra! coffee with a strong kick and mellow aftertaste.</p>
        </section>
    </div>
  );
}