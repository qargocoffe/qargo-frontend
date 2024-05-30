import { ButtonCustomized, Descriptive } from "@/components/ui";

export default function() {
  return (
    <div>
      
     
      <section className='w-full h-full min-h-[30rem] top-[-6rem] relative slide-in-top' 
        style={{
        backgroundImage: "url(/franchisies/banner.png)", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        </section>

        <section className="text-center top-[-4rem] relative px-4">
            <h2 className="slide-in-left px-7  mb-5 uppercase text-2xl tracking-widest font-normal text-lavazzaBlue">Ready to discover the Qargo Coffee Franchise Program?</h2>
            <p className="text-gray text-center mb-10 slide-in-left ">
            Join a new business venture with Qargo Coffee, leveraging the benefits of a recognized and established brand. Our team of franchise experts will support you throughout the entire process, providing guidance to successfully launching your new coffee shop. <br /><br />
                Discover our franchise system and kickstart a prosperous coffee venture.
          </p>
          <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='START NOW' url={''} type='button' />
        </section>

        <Descriptive 
          title="Start your own Business today" 
          image="/franchisies/coffee.png"
          description="Have you ever thought about having a coffee shopor starting your own business? Qargo Coffee is the answer.
          We have the expertise to get your location up and running and a team driven by an unstoppable passion to achieve continuous growth and better outcomes for your franchise.
          Join Qargo Coffee and enjoy the freedom of having your own business and being part of the next generation coffee brand." 
          />
    </div>
  );
}