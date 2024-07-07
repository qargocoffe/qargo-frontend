import { Closed } from './closed/Closed'
import { Opened } from './isOpen/Opened'


interface Props {
  isOpen: boolean,
  title: string
}

export const StoreCollapse = ({ isOpen, title }: Props )=> {
  return (
    <div className='slide-in-left reveal-scroll w-full'>
      
           {isOpen && (
            <Opened image={'/blog/default.png'} title={title} />
           )}

           {!isOpen && (
              <Closed image={'/blog/open-soon.png'} title={title} />
           )}
           
    </div>
  )
}
