import { Store, StoresResponse } from "@/interfaces";

export const getAllStores = async() :Promise<Store[] | undefined> => {
    try {
        const storesResponse: StoresResponse = await fetch(`http://localhost:1337/api/stores`)
            .then(res => res.json());

    const stores = storesResponse.data.map(({ attributes}) => {
      return {
        title: attributes.title ,
        direction: attributes.direction ,
        createdAt: attributes.createdAt ,
        updatedAt: attributes.updatedAt ,
        publishedAt: attributes.publishedAt ,
        telephone: attributes.telephone ,
        lng: attributes.lng ,
        lat: attributes.lat ,
      }
    })
    return stores;
  
    } catch (error) {
        return undefined;
    }
  }


