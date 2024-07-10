import Image from "next/image"


export const BoxInfo = () => {
  return (
    <div>
            <span className="slide-in-left text-sm max-w-[12rem] md:w-full px-4 py-3 flex gap-3 items-center cursor-pointer rounded-full border border-slate-beige hover:border-indigo-300 md:text-md ">
                <Image src={'/logos/cellphone.png'} width={15} height={20} alt="Cellphone" />
                (562)-733-8300
              </span>

              <span className="slide-in-left mt-4 text-sm max-w-[14rem] md:w-full px-3 py-3 flex gap-3 items-center cursor-pointer rounded-full border border-slate-beige hover:border-indigo-300 md:text-md ">
                <Image src={'/logos/mail.png'} width={22} height={20} alt="Cellphone" />
                info@qargocoffee.com
              </span>

              <span className="slide-in-left mt-4 text-sm px-2 py-3 flex gap-3 items-center cursor-pointer rounded-full border border-slate-beige hover:border-indigo-300 md:text-md ">
                <Image  src={'/logos/mail.png'} width={22} height={20} alt="Cellphone" />
                701 Brickell Ave. Suite 1550 Miami, FL 33131
              </span>
    </div>
  )
}
