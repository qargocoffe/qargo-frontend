import { MapContainer, Stores } from "@/components/ui";
import { getStores } from "@/utils";

export default async function VisitUs() {

  const stores = await getStores();

    return (
      <>
        {stores && (
          <div>
            <MapContainer  stores={stores} />
            <Stores stores={stores} />
          </div>
        )} 
      </>
    );
  }