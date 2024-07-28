import { Store } from '@/interfaces'
import { Closed } from './closed/Closed'
import { Opened } from './isOpen/Opened'




export const StoreCollapse = (store: Store )=> {
  return (
    <div className='slide-in-left reveal-scroll w-full'>
      
           {store.isOpen && (
            <Opened {...store} />
           )}

           {!store.isOpen && (
              <Closed {...store} />
           )}
           
    </div>
  )
}
