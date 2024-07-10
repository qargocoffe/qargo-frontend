import { Breadcrumb, ProductItem } from "@/components/ui";

export default function CategoriesPage() {
  return (
    <div>
        <Breadcrumb/>
        <section className="px-7 md:w-desktop m-auto md:min-h-[1100px] md:flex flex-col items-center justify-center">
          <h1 className="text-lavazzaBlue text-xl font-semibold tracking-wider mb-6 slide-in-top md:text-center md:text-2xl">LAVAZZA HOT</h1>
          <div className="md:grid grid-cols-2 gap-8 content-between ">
            <ProductItem title="CAFFE AMERICANO" image="/products/image1.png" url="/hey" /> 
            <ProductItem title="Caffe Au Lait" image="/products/image2.png" url="/hey" /> 
            <ProductItem title="Cappuccino" image="/products/image3.png" url="/hey" /> 
            <ProductItem title="Chai Tea Latte" image="/products/image4.png" url="/hey" /> 
            <ProductItem title="CAFFE AMERICANO" image="/products/image1.png" url="/hey" /> 
            <ProductItem title="Caffe Au Lait" image="/products/image2.png" url="/hey" /> 
            <ProductItem title="Cappuccino" image="/products/image3.png" url="/hey" /> 
            <ProductItem title="Chai Tea Latte" image="/products/image4.png" url="/hey" /> 
            <ProductItem title="CAFFE AMERICANO" image="/products/image1.png" url="/hey" /> 
            <ProductItem title="Caffe Au Lait" image="/products/image2.png" url="/hey" /> 
            <ProductItem title="Cappuccino" image="/products/image3.png" url="/hey" /> 
            <ProductItem title="Chai Tea Latte" image="/products/image4.png" url="/hey" /> 
         
            
          </div>
      
        </section>
    </div>
  );
}