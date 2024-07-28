
import { StoreCollapse } from './StoreCollapse';
import { Store } from '@/interfaces/store/store.interface';


interface Props {
  stores: Store[];
}

export const Stores = ({ stores }: Props) => {
  return (
    <div>
        <section className="xl:w-desktop lg:w-desktop md:w-desktop m-auto grid place-items-center relative top-[-6rem]">
          {stores.map((store) => (
                <div key={store.id}>
                    <StoreCollapse {...store} />
                </div>
            ))}
        </section>
    </div>
  )
}
