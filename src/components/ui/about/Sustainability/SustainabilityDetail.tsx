import clsx from "clsx"
import Image from "next/image"

interface Props {
    index: number,
    title: string,
    description: string,
    urlImage: string,
    urlImageDesktop: string
}

export const SustainabilityDetail = ({index, title, description, urlImage, urlImageDesktop}: Props ) => {

    const randomPosition = (index: number) => {
        if(index % 2 === 0) return true;
        return false; 
    }
 
  return (
    <div className="reveal-scroll">
        <article className={
            clsx('my-11 flex justify-between items-center gap-5 reveal-scroll md:flex-col ', {
                'flex-row-reverse md:flex-col-reverse gap-9':  randomPosition(index)
            })
        }>
            <div className={
                clsx('reveal-scroll w-1/2 md:w-full', 
                randomPosition(index) ? 'pr-9': 'pl-9' 
                )
            }>
                <h3 className="text-2xl text-lavazzaBlue">{title}</h3>
                <p className="mt-3 text-gray md:text-lg">{description}</p>
            </div>
            <figure className="w-1/2 md:w-full">
                <Image src={urlImage} className="md:hidden" alt="Coffee" width={1200} height={1200} />
                <Image src={urlImageDesktop} className="hidden md:block" alt="Coffee" width={1200} height={1200} layout="responsive" />
            </figure>
        </article>
    </div>
  )
}

