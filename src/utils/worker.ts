

import { Worker, WorkerResponse } from "@/interfaces";
import qs from "qs";

export const getWorkers = async (): Promise<Worker[]> => {
    const query = qs.stringify({
        sort: ['name:asc'],
        populate: {
          thumbnail: {
            fields: ['url', 'id']
          }
        },
      });

    try {
        const url = `${process.env.API}/workers?${query}`;  // Construct the URL with query parameters
        const response = await fetch(url);  // Fetch data from the constructed URL
        const workerResponse: WorkerResponse = await response.json();  // Parse JSON response
        console.log(workerResponse);  // Log the response (optional)

        return workerResponse.data || [];  // Return the 'data' array or an empty array if 'data' is null
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];  // Return undefined on error
    }
}
