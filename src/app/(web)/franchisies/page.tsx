import { Article, ArticleStore, ButtonCustomized, ContactForm, Descriptive } from "@/components/ui";
import PartnerSlide from "@/components/ui/about/PartnerSlide";
import Image from "next/image";

export default function FranchisiesPage() {
  return (
    <div>
      <section className='w-full h-full min-h-[30rem]  relative slide-in-top' 
        style={{
        backgroundImage: "url(/franchisies/banner.png)", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      </section>

        <section className="text-center my-8 px-4 lg:w-desktop lg:m-auto ">
            <h2 className="slide-in-left px-7  mb-5 uppercase text-2xl tracking-widest font-normal text-lavazzaBlue lg:w-2/3 lg:m-auto lg:text-2xl lg:my-7 ">Ready to discover the Qargo Coffee Franchise Program?</h2>
            <p className="text-gray text-center mb-10 slide-in-left lg:w-2/3 lg:m-auto lg:text-lg">
            Join a new business venture with Qargo Coffee, leveraging the benefits of a recognized and established brand. Our team of franchise experts will support you throughout the entire process, providing guidance to successfully launching your new coffee shop. <br /><br />
                Discover our franchise system and kickstart a prosperous coffee venture.
          </p>
          <div className="slide-in-right lg:mb-10">
            <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='START NOW' 
            url={'/franchisies/register'} type='link' />
          </div>
        </section>

        <Descriptive 
          title="Start your own Business today" 
          image="/franchisies/coffee.png"
          description="Have you ever thought about having a coffee shopor starting your own business? Qargo Coffee is the answer.
          We have the expertise to get your location up and running and a team driven by an unstoppable passion to achieve continuous growth and better outcomes for your franchise.
          Join Qargo Coffee and enjoy the freedom of having your own business and being part of the next generation coffee brand." 
          />
          <section className="px-6 lg:w-desktop lg:m-auto">
            <h1 className="text-lavazzaBlue tracking-wider uppercase py-5 lg:text-center lg:text-3xl lg:tracking-widest">Why Qargo?</h1>

            <Article
              image="/franchisies/articles/image1.png" 
              title="Customized design and installation" 
              description="Each of our stores is designed exclusively by our architecture and interior design team, making sure that every location is unique." />

            <Article
              direction={true}
              image="/franchisies/articles/image2.png" 
              title="Franchise support" 
              description="We will guide you every step of the way: from helping you find the perfect location in your area, to successfully launching your new business." />

            <Article
              image="/franchisies/articles/image3.png" 
              title="Ease of operation" 
              description="Our menu offers a selection of delicious food and beverage choices; from incredible pastries to tasty grab-n-go favorites. Your store will always be fresh and easy to replenish." />            

            <Article
              direction={true}
              image="/franchisies/articles/image4.png" 
              title="Premium quality products" 
              description="Our coffee comes from Lavazza, a world-renowned producer, known for its high-quality standards. We provide all the ingredients to make the best experience for you and your customers!" />

            <Article
              image="/franchisies/articles/image5.png" 
              title="Superior marketing support" 
              description="Our marketing department is dedicated to assist you with advertising and promoting your Qargo Coffee business in your local market." />            
          </section>

          <section className="">
            <PartnerSlide 
            banner="/partners/image1.png"
            description="We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best."/>
            <PartnerSlide 
            banner="/partners/image2.png"
            description="We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best."/>
            <PartnerSlide 
            banner="/partners/image3.png"
            description="We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best."/>
            <PartnerSlide 
            banner="/partners/image4.png"
            description="We’ve teamed-up with the biggest name in coffee to bring you an exceptional product for your customers. Backed by 125 years of experience, we can assure that with every cup served at your location, your customers will only receive the best."/>

          </section>
          <section className="">
            <h3 className="text-lavazzaBlue text-center tracking-widest text-2xl py-6">OUR STORES</h3>
            <ArticleStore 
            image="/franchisies/stores/image1.png"
            title="Sleek and modern style" 
            description=" Inspired by industrial design and architectural trends. Every Qargo Coffee store will transform the landscape of your city." />
            
            <ArticleStore 
            image="/franchisies/stores/image2.png"
            title="Kiosk and Drive-Thrustores available" 
            description=" We adapt to the market needs with stand-alone, kiosk or drive-thru locations. At Qargo Coffee, possibilities are endless." />

            <div className='mb-6 bg-beigeLight'>
                <figure className="w-full">
                        <Image src={'/franchisies/stores/image3.png'} layout='responsive' width={300} height={200} alt="Grados" />  
                </figure>
                <h3 className=' w-3/4 m-auto text-lavazzaBlue text-center pt-6 tracking-widest uppercase font-semibold'>Take the first step to join us!</h3>
                <div className="pb-6">
                  <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='CLICK HERE' url={'/franchisies/register'} type='link' />
                </div>
            </div>
          </section>
          <section >
            <ContactForm />
          </section>
    </div>
  );
}