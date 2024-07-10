import { BlogThumbnail, ButtonCustomized } from "@/components/ui";

export default function BlogsPage() {
  return (
    <div className="px-5 md:w-desktop md:m-auto md:mt-20">
      <h1 className="slide-in-left text-lavazzaBlue font-normal text-6xl">Blog</h1>
      <p className="slide-in-left text-gray mb-6 md:text-lg md:w-1/2">Find out the latest developments, both in Qargo Coffee and the Coffee Industry, with news, tips, history, trends, and lots more!</p>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image1.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image2.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image3.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image4.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image5.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image6.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image7.png" />
        <BlogThumbnail title="Qargo Coffee Serves Up Thanksgiving Joy to Long Beach..." image="/blog/thumbnails/image8.png" />
      </section>
      <ButtonCustomized background='bg-lavazzaBlue' fontColor='text-white' title='View More' url={''} type='button' />
    </div>
  );
}