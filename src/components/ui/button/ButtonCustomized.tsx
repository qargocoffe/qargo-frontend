import Image from "next/image"
import Link from "next/link"


interface Props {
  title: string,
  url: string  | any | null,
  background: string, 
  fontColor: string,
  type: 'button' | 'link',
  icon?: string
}


export const ButtonCustomized = ({title, url = '', background, fontColor, type = 'link', icon }: Props) => {
  return (
    <div style={{
      letterSpacing: '0.15rem'
    }} className="my-4 font-bold">
      {
        type === 'link' && <Link href={url} className={ background +' flex items-center justify-center m-auto w-auto  min-w-[9rem] max-w-[10rem] gap-2 px-3 py-[0.6rem] text-center rounded-full text-sm md:text-md ' + fontColor}>
          {title}
          {
            icon && 
            <figure className="w-[26px]">
              <Image
                            className="z-20 cursor-pointer ml-2"
                            src={icon}
                            alt='lupa'
                            width={22}
                            height={16}
                        />
            </figure>
            
          } </Link>
      }

      {
        type === 'button' && <button className={ background +' flex items-center justify-center m-auto w-auto  min-w-[9rem] max-w-[10rem] gap-2 px-3 py-[0.6rem] text-center rounded-full text-sm md:text-md ' + fontColor}>
          {title}
          {
            icon && 
            <figure className="w-[26px]">
              <Image
                            className="z-20 cursor-pointer"
                            src={icon}
                            alt='lupa'
                            width={27}
                            height={16}
                        />
            </figure>
            
          }
        </button>
      }
    </div>
  )
}
