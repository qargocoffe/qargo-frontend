import { Blog, BlogsResponse } from "@/interfaces/blog/blog.interface";

export const getBlogs = async(pagination: number = 4) :Promise<Blog[] | undefined> => {
    try {
        const blogsResponse: BlogsResponse = await fetch(`http://localhost:1337/api/blogs?
          populate[thumbnail][fields][0]=url&
          pagination[pageSize]=${pagination}`, {
        
    })
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