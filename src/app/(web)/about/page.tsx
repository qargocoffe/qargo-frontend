import { BannerMobile, ButtonCustomized, LaReserva, MainBanner, SustainabilityDetail, SustainabilityLayout } from "@/components/ui";
import Image from "next/image";

export default function AboutPage() {

  //const partners = await getPartners();
  const partners = [
      {
        title: 'Lavazza',
        description: 'Lavazza embodies Italian coffee culture, and their La Reserva de ¡Tierra! blends set the quality and sustainability standards for coffee.',
        logo: '/about/partners/lavazza-logo.png',
        banner: '/about/partners/lavazza.png',
      },
      {
        title: 'Bindi',
        description: 'Lavazza embodies Italian coffee culture, and their La Reserva de ¡Tierra! blends set the quality and sustainability standards for coffee.',
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
            <article className="sm:reveal-scroll text-center text-beige rounded-xl bg-beigeLight p-5 md:p-8 mb-11 slide-in-right md:text-lg">
                <h3 className="pb-7 text-2xl ">Our Mission</h3>
                <p>
                We’re bringing coffee culture back to its rightful status: a morning ritual, an afternoon escape, a moment of respite, an excuse to create new memories with loved ones. Today, many take coffee for granted, and we’re here to change that.
                </p>
            </article>

            <article className="sm:reveal-scroll text-center text-gray p-5 md:p-8 md:text-lg">
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

      <section>
          <article className="md:py-12 py-6 sm:reveal-scroll flex items-center gap-6 px-6 md:w-desktop md:m-auto">
            <figure className="w-1/2 h-auto md:hidden">
              <Image src={'/about/meet-the-qargo.png'} width={500} height={20} alt="Prueba" />
            </figure>

            <figure className="w-1/2 h-auto hidden md:block">
              <Image src={'/about/desktop/meet-the-qargo.png'} width={500} height={20} alt="Prueba" />
            </figure>

            <div className="sm:reveal-scroll w-1/2">
              <h3 className="text-lavazzaBlue text-xl mb-4 md:text-2xl md:text-center">Meet the QargoCoffee family</h3>
              <p className="text-gray text-left md:text-center mb-9 md:text-lg">
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
          <div className="bg-beigeLight">
            <article className="md:py-12 py-6 px-6 py-6 flex items-end gap-6  md:w-desktop md:m-auto md:items-center">
              <div className="sm:reveal-scroll w-1/2">
                <p className="text-gray text-left md:text-center mb-9 md:text-lg">
                Looking for new opportunities? Discover our open positions and change the future of coffee.
                </p>
                <ButtonCustomized
                type="link"
                    url={'/team'}
                    background={'bg-lavazzaBlue'}
                    fontColor={'text-white'}
                    title={'CAREERS'}          />
              </div>
              <figure className="w-1/2 h-auto md:hidden">
                <Image src={'/about/drink.png'} width={500} height={20} alt="Prueba" />
              </figure>

              <figure className="w-1/2 h-auto hidden md:block">
                <Image src={'/about/desktop/careers.png'} width={500} height={20} alt="Prueba" />
              </figure>
            </article>
          </div>
          
          <article className="md:py-12 py-6 flex items-end gap-6 px-6 md:w-desktop md:m-auto">
          <figure className="w-1/2 h-auto md:hidden">
              <Image src={'/about/women-call.png'} width={20} height={20} alt="Prueba" layout='responsive'/>  
            </figure>

            <figure className="w-1/2 h-auto hidden md:block">
              <Image src={'/about/desktop/women-call.png'} width={500} height={20} alt="Prueba" />
            </figure>
            <div className="sm:reveal-scroll w-1/2">
              <p className="text-gray text-left md:text-center mb-9 md:text-lg">
              Reach out if you have any questions regarding upcoming openings, new products, and more.
              </p>
              <ButtonCustomized
              type="link"
                  url={'/contact'}
                  background={'bg-lavazzaBlue'}
                  fontColor={'text-white'}
                  title={'CONTACT US'}          />
            </div>
            
          </article>
      </section>
    </div>
  );
}