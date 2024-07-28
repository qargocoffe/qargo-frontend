import { Store } from "@/interfaces";
import Image from "next/image";


export const Closed = ({title, direction, thumbnail }: Store) => {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item w-full ">
        <input type="radio" name="my-accordion-4" />

        <h2 className="collapse-title text-xl font-normal text-beige border-b-[0.1rem] border-beige">
          <span className="block text-beige font-light text-sm">OPEN SOON</span>
          {title}
        </h2>

        <div className="collapse-content  p-0 md:flex md:justify-center md:items-center w-full lg:w-desktop">
          {thumbnail.url && (
            <Image
            src={process.env.DOMAIN_API  + thumbnail.url}
            className="md:w-1/2"
            height={100}
            width={100}
            layout="responsive"
            alt="Main"
          />
          )}
          <article className="flex items-start gap-6 mb-6 mt-5 px-6 md:flex-col md:items-center md:justify-center md:w-1/2">
            <h2 className="collapse-title text-xl font-normal text-beige md:text-center hidden md:block">
                <span className="block text-beige font-light text-sm">OPEN SOON</span>
                {title}
            </h2>
            <Image
              src={"/logos/ubication.png"}
              width={30}
              height={20}
              alt="Phone"
            />
            <p className="text-gray w-2/3 md:text-center">
             {direction}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
