import Link from "next/link"


export const ButtonCustomized = ({title, url, background, fontColor}: any) => {
  return (
    <div className="my-4">
      <Link href={url} className={background +' px-6 py-3 rounded-full ' + fontColor}>{title}</Link>
    </div>
  )
}
