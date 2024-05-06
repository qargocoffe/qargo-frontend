import { BannerMobile } from "@/components/ui";
import { getBlogs } from "@/utils";


export default async function () {

  const blogs = await getBlogs(4);

  return (
    <div>
      <h1 className="text-sm">
      
        <BannerMobile typeBanner='blog' data={blogs}/>
      </h1>

    </div>
  );
}