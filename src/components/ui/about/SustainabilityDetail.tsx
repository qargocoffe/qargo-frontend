import clsx from "clsx"
import Image from "next/image"

interface Props {
    index: number,
    title: string,
    description: string,
    urlImage: string,
}

export const SustainabilityDetail = ({index, title, description, urlImage}: Props ) => {

    const randomPosition = (index: number) => {
        if(index % 2 === 0) return true;
        return false; 
    }
 
  return (
    <div className="reveal-scroll">
        <article className={
            clsx('my-11 flex justify-between items-center gap-5 reveal-scroll', {
                'flex-row-reverse gap-9':  randomPosition(index)
            })
        }>
            <div className={
                clsx('reveal-scroll w-1/2', 
                randomPosition(index) ? 'pr-9': 'pl-9' 
                )
            }>
                <h3 className="text-2xl text-lavazzaBlue">{title}</h3>
                <p className="mt-3 text-gray">{description}</p>
            </div>
            <figure className="w-1/2">
                <Image src={urlImage} alt="Coffee" width={1200} height={1200} />
            </figure>
        </article>
    </div>
  )
}

