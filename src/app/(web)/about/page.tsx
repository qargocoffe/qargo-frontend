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
          <p className="text-gray text-right mb-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>

          <article className="text-center text-beige rounded-xl bg-beigeLight p-5 mb-11">
              <h3 className="pb-7">Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>

          <article className="text-center text-gray p-5">
              <h3 className="pb-7">Our Vision</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>
      </section>

      <article className="flex bg-coffeStrong">
          <div className="ml-5 text-beigeLight">
              <h2 className="text-2xl ">Sustainability</h2>
              <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
          </div>
          <img src="/about/sustainability.png" alt="" />
      </article>
    </div>
  );
}