import { ProductArticle } from "@/components/ui";

export default function SummerPage() {
  return (
    <div>
      <section 
        className="w-full h-full min-h-[30rem] relative slide-in-top" 
        style={{
          backgroundImage: "url(/campaign/image1.png)", 
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></section>
      <section className="px-6 my-4">
        <p className="text-gray text-center slide-in-left">
        Amore di Summer is a celebration of the electrifying and captivating the Summer Love experience, embracing that passion and taking it to a romantic Italian setting.
        </p>
      </section>
      <section className="px-6">
        <ProductArticle 
            title="Roseberry Mocha (Hot)" 
            description="Mesmerizing combination of the rose's dellicate allure and the raspberry's livid tang, complemented by the white chocolate's buttery sweetness and the milk's creamy and modest texture."
            image="/campaign/products/image1.png"/>
        <ProductArticle 
            title="peach spritz" 
            description="Sparkling harmony mixing the peach's mellow sweetness, sparkling Italian spritz, and lemonade that creates a fresh, sweet, and bubbly drink."
            image="/campaign/products/image2.png"/>
        <ProductArticle 
            title="Twilight peach cold brew" 
            description="
            The flavors of the peach, Italian spritz, lemonade, and cold brew merge together to create a sweet, refreshing, and rich beverage with a modest kick that matches the fizzy textures perfectly."
            image="/campaign/products/image3.png"/>
        <ProductArticle 
            title="citrus rose sparkle" 
            description="An enchanting and sweet combination of rose, raspberry, and lemonade flavors that create a sweet and slightly acidic drink that shines as the light reaches its surface."
            image="/campaign/products/image4.png"/>
      </section>
    </div>
  );
}