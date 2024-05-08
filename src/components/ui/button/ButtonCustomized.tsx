import Link from "next/link"


interface Props {
  title: string,
  url: string  | any,
  background: string, 
  fontColor: string
}


export const ButtonCustomized = ({title, url, background, fontColor}: Props) => {
  return (
    <div className="my-4">
      <Link href={url} className={background +' px-6 py-3 rounded-full ' + fontColor}>{title}</Link>
    </div>
  )
}
