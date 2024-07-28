import { Blog, BlogResponse } from "@/interfaces/blog/blog.interface";
import qs from "qs";

export const getBlogs = async (pagination: number = 4): Promise<Blog[] | undefined> => {
    const query = qs.stringify({
        sort: ['title:asc'],
        populate: {
            thumbnail: {
                fields: ['url']
            }
        },
        pagination: {
            pageSize: pagination,
            page: 1,
        },
    });

    try {
        const url = `${process.env.API}/blogs?${query}`;  // Construct the URL with query parameters
        const response = await fetch(url);  // Fetch data from the constructed URL
        const blogsResponse: BlogResponse = await response.json();  // Parse JSON response

        console.log(blogsResponse);  // Log the response (optional)

        return blogsResponse.data || [];  // Return the 'data' array or an empty array if 'data' is null
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return undefined;  // Return undefined on error
    }
}
