import { BannerCategories } from "@/components/ui";

export default async function OurMenuPage() {
    //const categories = await getCategories();
    const categories = [
      {
          "slug": "tea",
          "image": "/our-menu/image4.png",
          "animation": "/our-menu/animations/image.png"
      },
      {
          "slug": "seasonal",
          "image": "/our-menu/image5.png",
          "animation": "/our-menu/animations/image2.png"
      },
      {
          "slug": "lotus",
          "image": "/our-menu/image6.png",
          "animation": "/our-menu/animations/image3.png"
      },
      {
          "slug": "kids-and-pets",
          "image": "/our-menu/image7.png",
          "animation": "/our-menu/animations/image4.png"
      },
      {
          "slug": "delicacies",
          "image": "/our-menu/image8.png",
          "animation": "/our-menu/animations/image5.png"
      },
      {
          "slug": "grab-and-go",
          "image": "/our-menu/image9.png",
          "animation": "/our-menu/animations/image6.png"
      },
      {
          "slug": "taste-of-italy",
          "image": "/our-menu/coffee.png",
          "animation": "/our-menu/animations/image7.png"
      },
  ];

  return (
    <div>
      <section className="w-full text-focus-in mt-20  m-auto lg:w-desktop bg-whiteBackground">
            <BannerCategories categories={categories} />
      </section>
    </div>
  );
}