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
    <div className="my-4 tracking-widest font-bold">
      {
        type === 'link' && <Link href={url} className={ background +' flex items-center justify-center m-auto max-w-[14rem] min-w-[9rem] gap-2 px-6 py-3 rounded-full w-full  ' + fontColor}>
          {title}
          {
            icon && 
            <figure className="w-[26px]">
              <Image
                            className="z-20 cursor-pointer"
                            src={icon}
                            alt='lupa'
                            width={22}
                            height={16}
                        />
            </figure>
            
          } </Link>
      }

      {
        type === 'button' && <button className={ background +' flex items-center justify-center m-auto max-w-[14rem] min-w-[9rem] gap-2 px-6 py-3 rounded-full  ' + fontColor}>
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
