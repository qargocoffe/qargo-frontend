import { Breadcrumb, ProductItem } from "@/components/ui";

export default function CategoriesPage() {
  return (
    <div>
        <Breadcrumb/>
        <section className="px-7">
          <h1 className="text-lavazzaBlue text-xl font-semibold tracking-wider mb-6">LAVAZZA HOT</h1>
          <ProductItem title="CAFFE AMERICANO" image="/products/image1.png" url="/hey" /> 
          <ProductItem title="Caffe Au Lait" image="/products/image2.png" url="/hey" /> 
          <ProductItem title="Cappuccino" image="/products/image3.png" url="/hey" /> 
          <ProductItem title="Chai Tea Latte" image="/products/image4.png" url="/hey" /> 
          <ProductItem title="Cortado" image="/products/image5.png" url="/hey" /> 
          <ProductItem title="CAFFE AMERICANO" image="/products/image6.png" url="/hey" /> 
      
        </section>
    </div>
  );
}