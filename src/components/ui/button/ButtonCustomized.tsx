import Link from "next/link"


interface Props {
  title: string,
  url: string  | any | null,
  background: string, 
  fontColor: string,
  type: 'button' | 'link'
}


export const ButtonCustomized = ({title, url = '', background, fontColor, type = 'link'}: Props) => {
  return (
    <div className="my-4">
      {
        type === 'link' && <Link href={url} className={background +' px-6 py-3 rounded-full ' + fontColor}>{title}</Link>
      }

      {
        type === 'button' && <button className={background +' px-6 py-3 rounded-full ' + fontColor}>{title}</button>
      }
    </div>
  )
}
