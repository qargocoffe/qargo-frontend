import { Store } from '@/interfaces/store/store.interface'
import { Map } from './Map'


interface MapContainerProps {
  stores: Store[];
}

export const MapContainer = ({ stores }: MapContainerProps) => {
  return (
    <div className='slide-in-top'>
        <section className='w-full top-[-6rem] relative '>
            <Map/>
        </section>
    </div>
  )
}
