import { ButtonCustomized, SustainabilityDetail } from "@/components/ui";
import Image from "next/image";

export default function NamePage() {
  return (
    <div className="">
      <section className="w-100 flex justify-around items-center min-h-[300px] relative bottom-[-2rem]">
        <img src="/about/croazan.png" alt="chocolato" className="w-1/2 left-0 h-auto block absolute" />
        <img src="/about/chocolato.png" alt="chocolato" className="w-1/4 h-auto block absolute top-[220px]" />
        <img src="/about/coffee.png" alt="chocolato" className="right-0 w-1/2 h-auto block absolute" />
      </section>

      <section className="px-6">
          <div className="text-right text-lavazzaBlue text-4xl pb-4">
            <h2 className="">Our <br />History</h2>
          </div>
          <p className="text-gray ml-3 text-right mb-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>

          <article className="text-center text-beige rounded-xl bg-beigeLight p-5 mb-11">
              <h3 className="pb-7 text-2xl">Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>

          <article className="text-center text-gray p-5">
              <h3 className="pb-7 text-2xl">Our Vision</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>
      </section>

      <article className="bg-coffeStrong relative mt-[5rem]">
          <div className="ml-5 w-1/2 text-beigeLight max-h-[300px] px-4 py-5">
              <h2 className="text-2xl ">Sustainability</h2>
              <p className="mt-5 mb-7">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ButtonCustomized
                key={'VIEW MORE'}
                url={'/'}
                background={'bg-beigeLight'}
                fontColor={'text-beige'}
                title={'VIEW MORE'}
                />
          </div>
          <figure className="absolute bottom-0 right-0">
              <Image src="/about/sustainability.png" alt="Sustainability" width={180} height={40} />
          </figure>
      </article>


      <section className="px-9">
          <SustainabilityDetail 
          title={'Planet'} 
          description={'Our products are made with Lavazza ¡Tierra! Selection, a sustainable Rainforest Alliance Certified coffee blend, that promotes the rights and well-being of workers communities while meeting rigorous social and environmental '} 
          urlImage={'/about/coffee-white.png'}
          index={1}
          />
          <SustainabilityDetail 
          title={'People'} 
          description={'Our employees are trained, not only on our product portfolio, but also on making sure that all customers are treated with equality, friendliness and respect. Customer service is at the heart of our business.          '} 
          urlImage={'/about/coffee-white2.png'}
          index={2}
          />
          <SustainabilityDetail 
          title={'Product'} 
          description={'From the growing at Lavazza’s coffee grounds to the barista hand-crafting your drink, every step of the way is carefully supervised to ensure excellence and flavor. We’re committed to provide you with the best because that’s exactly what you deserve.'} 
          urlImage={'/about/coffee-white3.png'}
          index={3}
          />
          
      </section>
    </div>
  );
}