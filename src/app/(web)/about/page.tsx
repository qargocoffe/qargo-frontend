import { BannerMobile, ButtonCustomized, SustainabilityDetail } from "@/components/ui";
import { getPartners } from "@/utils/about";
import Image from "next/image";

export default async function () {

  //const partners = await getPartners();
  const partners = [
      {
        title: 'Lavazza',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        logo: '/about/partners/lavazza-logo.png',
        banner: '/about/partners/lavazza.png',
      },
      {
        title: 'Bindi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        logo: '/about/partners/lavazza-logo.png',
        banner: '/about/partners/bindi.png',
      },
  ]

  return (
    <div className="text-base bg-whiteBackground">
      <section className="w-100 flex justify-around items-center min-h-[300px] relative bottom-[-2rem]">
        <img src="/about/croazan.png" alt="chocolato" className="slide-in-left  w-[40%] left-0 h-auto block absolute" />
        <img src="/about/chocolato.png" alt="chocolato" className="slide-in-top w-[30%] h-auto block absolute left-20 top-[11rem]" />
        <img src="/about/coffee.png" alt="chocolato" className="slide-in-right  right-0 w-4/5 h-auto block bottom-3 absolute" />
      </section>

      <section className="px-6">
          <div className="text-right text-lavazzaBlue text-4xl pb-4">
            <h2 className="slide-in-right">Our <br />History</h2>
          </div>
          <p className="text-gray ml-3 text-right mb-11 slide-in-left">
          Our commitment to bringing Italy’s Finest Coffee & Pastries to the US is the pen that writes our history. Founded in 2020, Our story started with a single store in the golden state of California, quickly spreading our presence to Florida, Colorado, Washington, D.C., and across the USA. Today, we’re creating the new norm: A fusion of Italian quality and tradition and the rich tapestry of flavors from every corner of the USA.
          </p>

          <article className="reveal-scroll text-center text-beige rounded-xl bg-beigeLight p-5 mb-11 slide-in-right">
              <h3 className="pb-7 text-2xl ">Our Mission</h3>
              <p>
              We’re bringing coffee culture back to its rightful status: a morning ritual, an afternoon escape, a moment of respite, an excuse to create new memories with loved ones. Today, many take coffee for granted, and we’re here to change that.
              </p>
          </article>

          <article className="reveal-scroll text-center text-gray p-5">
              <h3 className="pb-7 text-2xl">Our Vision</h3>
              <p>
              We stand as a beacon of warmth and connection in every community with a Qargo Coffee shop, a haven where coffee lovers are reminded of why we adore this beverage. It isn’t fast food, and we’re setting a new standard in the industry.
              </p>
          </article>
      </section>

      <article className=" bg-coffeStrong relative mt-[5rem]">
          <div className="ml-5 w-1/2 text-beigeLight max-h-[300px] px-4 py-5">
              <h2 className="text-2xl slide-in-left-scroll">Sustainability</h2>
              <p className="mt-5 mb-7 slide-in-left-scroll">
              With Lavazza ¡Tierra! in every coffee cup, our commitment to the planet is at the forefront of our philosophy.
              </p>
              <div className="slide-in-left-scroll">
                <ButtonCustomized
                  type="link"
                  key={'VIEW MORE'}
                  url={'/sustainability'}
                  background={'bg-beigeLight'}
                  fontColor={'text-beige'}
                  title={'VIEW MORE'}
                  />
              </div>
              
          </div>
          <figure className="absolute bottom-0 right-0 slide-in-right-scroll">
              <Image src="/about/sustainability.png" alt="Sustainability" width={180} height={40} />
          </figure>
      </article>


      <section>
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

      <section>
        <BannerMobile typeBanner="partner" data={partners} />
      </section>

      <section className="mt-6">
          <article className="reveal-scroll flex items-center gap-6 px-6">
            <figure className="w-1/2 h-auto">
              <Image src={'/team/miniature.png'} width={500} height={20} alt="Prueba" />
            </figure>
            <div className="reveal-scroll w-1/2">
              <h3 className="text-lavazzaBlue text-xl mb-4">Meet the QargoCoffee family</h3>
              <p className="text-gray text-left mb-9">
              Our team of expert architects, designers, baristas, and marketing specialists are the backbone of Qargo Coffee.
              </p>
              <ButtonCustomized
              type="link"
                  url={'/team'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={'VIEW MORE'}          />
            </div>
          </article>
          <article className="px-6 py-6 flex items-end gap-6 mt-12 bg-beigeLight">
            <figure className="reveal-scroll w-1/2 h-auto">
              <Image src={'/about/drink.png'} width={20} height={20} alt="Prueba" layout='responsive'/>
            </figure>
            <div className="reveal-scroll w-1/2">
              <p className="text-gray text-left mb-9">
              Looking for new opportunities? Discover our open positions and change the future of coffee.
              </p>
              <ButtonCustomized
              type="link"
                  url={'/team'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={'CAREERS'}          />
            </div>
          </article>
          <article className="flex items-end gap-6 px-6 mt-12">
            
            <div className="reveal-scroll w-1/2">
              <p className="text-gray text-left mb-9">
              Reach out if you have any questions regarding upcoming openings, new products, and more.
              </p>
              <ButtonCustomized
              type="link"
                  url={'/contact'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={'CONTACT US'}          />
            </div>
            <figure className="reveal-scroll w-1/2 h-auto">
              <Image src={'/about/women-call.png'} width={20} height={20} alt="Prueba" layout='responsive'/>
            </figure>
          </article>
      </section>
    </div>
  );
}