import { Blog, BlogsResponse } from "@/interfaces/blog/blog.interface";

export const getHomePage = async() :Promise<any | undefined> => {
    try {
        const blogsResponse: BlogsResponse = await fetch(`http://localhost:1337/api/homepage?populate=*`)
        .then(res => res.json());
    
  
    const blogs = blogsResponse.data.map(({ attributes }) => {
      return {
        title: attributes.title,
        description: attributes.description,
        slug: attributes.slug,
        thumbnail: attributes.thumbnail,      
      }
    })
  
    return blogs;
  
    } catch (error) {
        return undefined;
    }
  }