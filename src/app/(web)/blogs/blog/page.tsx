import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
       <section>
        <figure className=''>
            <Image className='max-h-[600px] relative' src={'/blog/blog-detail.png'} width={200} height={200} alt='Image' layout='responsive'/>   
        </figure>
       </section>
       
    </>
  );
}