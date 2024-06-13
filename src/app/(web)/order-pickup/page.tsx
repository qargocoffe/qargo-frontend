import { ThumbnailContainer } from "@/components/ui";

export default function OrderPage() {
  return (
    <div>
      <section className='w-full h-full min-h-[25rem] top-[-6rem] relative slide-in-top' 
        style={{
        backgroundImage: "url(/order/initial.png)", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}>
            <div className="text-lavazzaBlue py-2 px-5 slide-in-left flex absolute bottom-[4rem] right-0 flex-col justify-start items-start">
              <h1 className="text-4xl">Order <br />Pickup</h1>
            </div>
        </section>

        <section className="mb-9">
        <p className="text-gray px-7 text-right">
              We are ready to take your order anywhere you are!
              <br />
              <br />
                Dive into our incredible menu packed with irresistible Lavazza Coffee drinks, delicious Bindi pastries, and multiple grab-and-go options. Whether you crave an iced latte, bold espresso, or refreshing cold brew, we’ve got the perfect brew for you to taste greatness. Just customize your order to match your coffee cravings!
                <br />
                <br />
                Don’t miss out on this epic coffee adventure and place your order today at Qargo Coffee!
        </p>
        </section>
        <section className="">
            <h2 className="slide-in-left px-7 text-center mb-5 uppercase text-xl tracking-widest font-semibold text-lavazzaBlue">
                Select your nearest store to place your order:
            </h2>
            <ThumbnailContainer/>
        </section>
    </div>
  );
}