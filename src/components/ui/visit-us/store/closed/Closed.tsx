import Image from "next/image";

interface Props {
    title: string,
    image:string
}


export const Closed = ({title, image}: Props) => {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item ">
        <input type="radio" name="my-accordion-4" />

        <h2 className="collapse-title text-xl font-normal text-beige border-b-[0.1rem] border-beige">
          <span className="block text-beige font-light text-sm">OPEN SOON</span>
          {title}
        </h2>

        <div className="collapse-content  p-0 md:flex md:justify-center md:items-center">
          <Image
            src={image}
            height={100}
            width={100}
            layout="responsive"
            alt="Main"
          />
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
              707 E Ocean Blvd. Unit B-106,Long Beach, CA 90802
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
