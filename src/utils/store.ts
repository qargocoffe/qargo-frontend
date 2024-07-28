
import { Store, StoreResponse } from "@/interfaces/store/store.interface";
import qs from "qs";

export const getStores = async (pagination: number = 4): Promise<Store[] | undefined> => {
    const query = qs.stringify({
        sort: ['isOpen:desc'],
        populate: {
          thumbnail: {
              fields: ['url', 'id']
          }
      },
        pagination: {
          pageSize: pagination,
          page: 1,
        },
      });

    try {
        const url = `${process.env.API}/stores?${query}`;  // Construct the URL with query parameters
        const response = await fetch(url);  // Fetch data from the constructed URL
        const storeResponse: StoreResponse = await response.json();  // Parse JSON response

        console.log(storeResponse);  // Log the response (optional)

        return storeResponse.data || [];  // Return the 'data' array or an empty array if 'data' is null
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return undefined;  // Return undefined on error
    }
}
