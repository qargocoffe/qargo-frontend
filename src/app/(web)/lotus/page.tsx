import { ProductArticle } from "@/components/ui";
import Image from "next/image";



export default function LotusPage() {


  const products  = [
    {
      id:1,
      title: "pina cocolada",
      description: "An indulgent smoothie that turns classic tropical flavors into a wholesome beverage.",
      image: "/campaign/lotus/image1.png"
    },
    {
      id:2,
      title: "melonade",
      description: "Cozy and sweet indulgence with a fresh flavor profile that matches its fulfilling sips perfectly.",
      image: "/campaign/lotus/image2.png"
    },
    {
      id:3,
      title: "mango dreamsicle",
      description: "An energizing tropical escape that combines citric and sweet notes in every sip.",
      image: "/campaign/lotus/image3.png"
    },
    {
      id:4,
      title: "apple citrus",
      description: "Deliciously tart green apple infusion that's balanced by its creaminess, creating a nourishing delight.",
      image: "/campaign/lotus/image4.png"
    },
    {
      id:5,
      title: "berry burst fusion",
      description: "Bold and refreshing berry fusion for the perfect energy boost before a long day.",
      image: "/campaign/lotus/image5.png"
    }
  ]

  return (
    <div className="bg-beigeLight">

      <section 
        className="w-full h-full min-h-[30rem] lg:min-h-[50rem] relative slide-in-top" >
        <Image src={'/home/slide1.png'} alt={'Order'} width={30} height={30 } layout="responsive" className="md:hidden" />
        <Image src={'/campaign/lotus/initial.png'} alt={'Order'} 
           layout="fill"
          objectFit="cover"
          className="w-full hidden md:block " />
        </section>
      <section className="px-6 my-4 lg:w-desktop md:m-auto">
        <p className="text-gray text-center slide-in-left lg:text-lg lg:p-5 lg:w-2/3 m-auto">
        Our ColorFuel Smoothies are your new natural energy boost, packed with all the energy your day demands and the flavor your heart desires.
        </p>
      </section>
      <section className="px-6 lg:w-desktop md:m-auto lg:grid lg:grid-cols-3 lg:gap-12 lg:place-items-center">
        {
          products.map((product) => (
            <ProductArticle 
                product={product}
                key={product.id}
              />
          ))
        }
      </section>
    </div>
  );
}