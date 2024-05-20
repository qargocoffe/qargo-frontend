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
        if(index % 2 === 0) return false;
        return true;       
    }
 
  return (
    <div className="reveal-scroll">
        <article className={
            clsx('my-11 flex justify-between items-center gap-5 reveal-scroll', {
                'flex-row-reverse gap-9':  randomPosition(index)
            })
        }>
            <div className="reveal-scroll">
                <h3 className="text-2xl text-lavazzaBlue">{title}</h3>
                <p className="mt-3 text-gray">{description}</p>
            </div>
            <figure>
                <Image src={urlImage} alt="Coffee" width={1600} height={2} />
            </figure>
        </article>
    </div>
  )
}

