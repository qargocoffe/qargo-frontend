import { BlogsResponse, Blog } from "@/interfaces/blog/blog.interface";

const getBlogs = async(pagination = 4): Promise<Blog[]> => {
  
  const blogResp : any = await fetch('http://localhost:1337/api/blogs?fields[0]=title&fields[1]=description&fields[2]=slug&pagination[pageSize]=' + pagination)
  .then(res=> res.json());


  const blogs = blogResp.data.map((blog: Blog) => {
    return {
      title: blog.title,
      description: blog.description,
      slug: blog.slug
    }
  })
  
  console.log(blogResp)
  
  return blogs;
}



export default async function () {

  const blogs = await getBlogs();

  return (
    <div>
      <h1>
        {JSON.stringify(blogs[0])}
      </h1>

    </div>
  );
}