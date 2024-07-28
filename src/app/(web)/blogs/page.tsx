import { BlogThumbnail, ButtonCustomized } from "@/components/ui";
import { getBlogs } from "@/utils";

export default async function BlogsPage() {

  const blogs = await getBlogs();

  return (
    <div className="px-5 lg:w-desktop lg:m-auto md:mt-20">
      <h1 className="slide-in-left text-lavazzaBlue font-normal text-6xl">Blog</h1>
      <p className="slide-in-left text-gray mb-6 md:text-lg md:w-1/2">Find out the latest developments, both in Qargo Coffee and the Coffee Industry, with news, tips, history, trends, and lots more!</p>
      <section className="grid grid-cols-2 gap-10 md:grid-cols-3">
        
        {blogs && blogs.map((blog, index) => 
          <BlogThumbnail key={index} {...blog} />
          
        )}
      </section>
      <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='View More' url={'/'} type='button' />
    </div>
  );
}