import { BannerMobile, ButtonCustomized, LaReserva, MainBanner, SustainabilityDetail, SustainabilityLayout } from "@/components/ui";
import Image from "next/image";

export default function AboutPage() {

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
      
      {/* Banner About */}
      <MainBanner/>

      {/* Banner About */}
      <section className="px-6 md:w-desktop md:m-auto">
          <div className="text-right text-lavazzaBlue text-4xl pb-4 md:text-5xl">
            <h2 className="slide-in-right">Our <br />History</h2>
          </div>
          <p className="text-gray ml-3 text-right mb-11 slide-in-left md:text-lg">
          Our commitment to bringing Italy’s Finest Coffee & Pastries to the US is the pen that writes our history. Founded in 2020, Our story started with a single store in the golden state of California, quickly spreading our presence to Florida, Colorado, Washington, D.C., and across the USA. Today, we’re creating the new norm: A fusion of Italian quality and tradition and the rich tapestry of flavors from every corner of the USA.
          </p>

          <div className="md:flex"> 
            <article className="reveal-scroll text-center text-beige rounded-xl bg-beigeLight p-5 md:p-8 mb-11 slide-in-right md:text-lg">
                <h3 className="pb-7 text-2xl ">Our Mission</h3>
                <p>
                We’re bringing coffee culture back to its rightful status: a morning ritual, an afternoon escape, a moment of respite, an excuse to create new memories with loved ones. Today, many take coffee for granted, and we’re here to change that.
                </p>
            </article>

            <article className="reveal-scroll text-center text-gray p-5 md:p-8 md:text-lg">
                <h3 className="pb-7 text-2xl">Our Vision</h3>
                <p>
                We stand as a beacon of warmth and connection in every community with a Qargo Coffee shop, a haven where coffee lovers are reminded of why we adore this beverage. It isn’t fast food, and we’re setting a new standard in the industry.
                </p>
            </article>
          </div>
      </section>
     {/*  Coffee Banner */}
        <LaReserva/>
     {/*  Details Sustainability */}

      <SustainabilityLayout/>
     {/*  PARTNERS SWIPER */}

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