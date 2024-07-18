import { Blog, BlogsResponse } from "@/interfaces/blog/blog.interface";

export const getBlogs = async(pagination: number = 4) :Promise<Blog[] | undefined> => {
    try {
    //     const blogsResponse: BlogsResponse = await fetch(`http://localhost:1337/api/blogs?
    //       populate[thumbnail][fields][0]=url&
    //       pagination[pageSize]=${pagination}`, {
        
    // })
    // .then(res => res.json());

    const blogsResponse = {
      "data": [
          {
              "id": 1,
              "attributes": {
                  "title": "Qargo Coffee takes over East Village Art District in Long Beach, CA to empower creators!",
                  "description": "The International City is ready to experience the quality of Lavazza Coffee alongside a perfectly crafted concept for the artistic community.",
                  "publishied": "2024-05-09T05:45:00.000Z",
                  "banner": "/blog/default.png",
                  "content": "\nLong Beach, CA – Qargo Coffee, known for its community-centric approach to coffee, expresses gratitude to the Long Beach Rescue Mission for the opportunity to contribute to their Christmas celebration.\n\nIn the spirit of the holiday season, Qargo Coffee aimed to spread joy and warmth by donating a delightful assortment of freshly baked pastries to the Long Beach Rescue Mission. This heartwarming gesture was made possible by the gracious acceptance of the Long Beach Rescue Mission, which opened its doors to allow Qargo Coffee to be part of the Christmas festivities, catering to over 600 individuals, including those experiencing homelessness and others in need.\n\nSebastian Garcia, Marketing Director at Qargo Coffee, shared, “Being part of the Long Beach Rescue Mission’s Christmas celebration is truly humbling. Our goal is not only to give back but to share in the spirit of community and togetherness during this special time of year. We extend our sincere thanks to the Long Beach Rescue Mission for embracing us and letting us contribute to their meaningful cause.”\n\nAligned with Lavazza ¡Tierra!, Qargo Coffee’s commitment to social responsibility shines through, emphasizing sustainable agricultural practices and support for local communities. Qargo Coffee remains dedicated to uplifting communities and empowering creators through every cup of coffee.\n\nDuring the event, the Qargo Coffee Corporate team actively engaged in volunteering, offering warm breakfasts, hugs, and smiles to over 600 guests. This hands-on involvement reflects Qargo Coffee’s dedication to serving its community beyond providing pastries and coffee.\n\nIn addition, the Qargo Coffee team is actively connected with the local community, fostering genuine conversations and meaningful connections. This interactive approach reflects Qargo Coffee’s belief that a cup of coffee can spark conversations, inspire friendships, and cultivate a sense of belonging. By participating in community events, Qargo Coffee strives not only to be a coffee provider, but a cherished member of the neighborhoods it serves.\n\nAbout Qargo Coffee:\nQargo Coffee is a specialty coffee shop proudly serving sustainably sourced Lavazza coffee, handcrafted drinks, Italian pastries, and more. Established in 2020, the company is on a mission to redefine the coffee shop experience, offering a space for relaxation, conversation, and community-building. Committed to eco-friendly practices, Qargo Coffee plans to expand in select U.S. markets.\n\nFor more information, visit Qargo Coffee’s social media and website: Qargo Coffee Linktree\n\nAbout Long Beach Rescue Mission:\nLong Beach Rescue Mission is a non-profit organization dedicated to providing food, shelter, and supportive services to individuals experiencing homelessness and those in need. Their commitment to restoring hope and transforming lives aligns with Qargo Coffee’s mission of community empowerment.\n\n",
                  "slug": "qargo-coffee-takes-over-east-village-art-district-in-long-beach-ca-to-empower-creators",
                  "createdAt": "2024-05-02T23:26:57.574Z",
                  "updatedAt": "2024-05-03T20:51:58.788Z",
                  "publishedAt": "2024-05-02T23:29:07.737Z",
                  "thumbnail": {
                      "data": {
                          "id": 208,
                          "attributes": {
                              "url": "/uploads/tampa_press_single_qargo_coffee_e31236a077.jpg"
                          }
                      }
                  }
              }
          },
          {
              "id": 2,
              "attributes": {
                  "title": "Qargo Coffee Spreads Christmas Cheer to Long Beach Rescue Mission",
                  "description": "The International City is ready to experience the quality of Lavazza Coffee alongside a perfectly crafted concept for the artistic community.",
                  "publishied": "2024-05-14T05:45:00.000Z",
                  "banner": "/blog/default.png",
                  "content": "As Qargo Coffee keeps expanding all across The Golden State, it’s now time to conquer the classic Southern City of Long Beach. The vibrant coffee culture of this community is the perfect scenario for the brand to take over with its high-quality Lavazza Coffee. With more than 125 years of growing and roasting experience, Lavazza offers more than just a fine-dining experience, but also a top-level harvest in their sustainable La Reserva de ¡Tierra! blend.\n\nBesides offering a unique experience for coffee lovers, Qargo Coffee is highly committed in being a huge part of the artistic life surrounding the location, with their new store in the heart of the East Village Art District @ The Current.\n\nWith this in mind, the brand has created a store where its philosophy of empowering creators connects with local artists, inspiring them to keep discovering and creating, one cup of coffee at a time.\n\n“We are really proud of opening the first store location of Qargo Coffee in the City of Long Beach. Besides the brand’s upcoming relevance across the East Coast, the empowering creator’s philosophy connects perfectly with our artistic and creative community, and that is the most important factor for us.\n\nBecoming part of the Qargo Coffee team was an easy process for us, thanks to the confidence we have in the high-quality products we offer in store, like Lavazza Coffee, Bindi pastries and desserts, or Lotus Plant Energy Drinks. Having a top-tier menu and encouraging a philosophy that aligns with your community is the perfect recipe to stand for a brand and make it your own.\n\nOur biggest dream is to have everyone in the Long Beach area visiting our modern day coffee shop and inspiring them to be their best, while sharing a premium cup of coffee.” – said Ashley and Monica Solanki, store operators for Qargo Coffee – Long Beach.\n\nFrom a high-quality menu with top-level beverages, food, and pastries, to an organic connection with the communities through a unique customer experience, Qargo Coffee has all the ingredients to stand out from its competitors and keep expanding across the USA.\n\n“Our brand statement is to “empower the creators”. When the moment arose to take on Long Beach, it only made sense to join the community. We know there’s a vast amount of young residents in the area who are eager to find a space in which they can create, be themselves and be unique, and that is when Qargo Coffee comes in. We’re continuing to grow and we couldn’t be happier about the direction our company is taking” – said Sebastian Garcia, Director of Marketing for Qargo Coffee.\n\nThe arrival of Qargo Coffee to Long Beach is not only a success for the brand and a sign of its exponential growth, but also an opportunity to keep connecting with true coffee lovers and passionate creators, who know better than anyone that life begins after coffee. Qargo Coffee looks forward to becoming a part of the Long Beach community and consolidating its presence in the area.\n\nAbout Qargo Coffee\n\nQargo Coffee is a specialty coffee shop proudly serving world famous, sustainably-sourced Lavazza premium coffee, inspired handcrafted drinks, delicious Italian pastries, tasty baked goods, lunch and snack options. Founded in 2020, the company is on a mission to create a new coffee shop experience and their locations generate an oasis for a moment of relaxation, intimate conversation, gathering of friends and most importantly to empower the creator.\n\nThey are also committed to developing new locations with eco-friendly construction methods and sustainable best practices, while positioning to expand in select markets across the U.S.\n\nFind out more about their products and new locations on their social media and their website: https://linktr.ee/qargocoffee\n\nOr contact Qargo Coffee to get further information:",
                  "slug": "qargo-coffee-spreads-christmas-cheer-to-long-beach-rescue-mission",
                  "createdAt": "2024-05-02T23:27:56.310Z",
                  "updatedAt": "2024-05-16T20:35:42.093Z",
                  "publishedAt": "2024-05-02T23:29:10.981Z",
                  "thumbnail": {
                      "data": {
                          "id": 209,
                          "attributes": {
                              "url": "/uploads/Blog_0004_Colorado_41de49dd8f.jpg"
                          }
                      }
                  }
              }
          },
          {
              "id": 3,
              "attributes": {
                  "title": "Tampa International Plaza & Bay Street opens its doors to Qargo Coffee",
                  "description": "The International City is ready to experience the quality of Lavazza Coffee alongside a perfectly crafted concept for the artistic community.",
                  "publishied": "2024-05-15T05:30:00.000Z",
                  "banner": "/blog/default.png",
                  "content": "Floridians from Parkland Estates, Sunset Park, Culbreath, Cory Lake Isles, Beach Park and Tampa: Get ready to be empowered with Qargo Coffee, the brand that’s bringing Lavazza fine-dining coffee to the everyday life of over 3.3 million residents in the area surrounding International Plaza and Bay Street mall.\n\nSince its recent expansion and after new store development signings in Colorado, Michigan and Nevada, Qargo Coffee is excited to add the Sunshine State to the list. Starting with the city of Tampa, Qargo Coffee is joining this vibrant, coastal community to serve new customers its signature high-quality coffee and irresistible pastries.\n\nAnd that’s precisely what makes Qargo Coffee stand out from their competitors across the USA: Offering something more than a delicious coffee, but rather, a whole premium product menu, outstanding customer experience, breathtaking design for each store and much more.\n\n“We’re proud to open in the wonderful Sunshine State of Florida in the well known area of Tampa. The State of Florida has become home to families that have relocated in the last 2 years because of the endless opportunities it offers. We’re looking forward to serving the Tampa community with future expansion to other parts of Florida soon” – said Sebastian Garcia, Director of Marketing for\nQargo Coffee.\n\nBut the secret to their impressive expansion and growth is not only in Qargo’s philosophy, to “Empower the Creators”, it is also in their partnership with Lavazza: the 125-year-old Italian Coffee Powerhouse that provides all the ingredients and recipes to serve a phenomenal product; and bring the fine-dining coffee experience into every day moments for each customer, whether at breakfast, lunch or anytime, Qargo Coffee will be sure to satisfy.\n\n“The great quality of our products, the 24/7 team support, and the friendly work environment were the key factors for choosing Qargo Coffee. My goal was also to add value to the consumer experience; in the past, if you wanted to enjoy a cup of Lavazza coffee, you needed to go to a five-star hotel. Now, there’s an opportunity of having a premium product near you. Creating that reality inspired me to invest, not only in one but nine locations across the Tampa Bay area, hoping to one day transform Qargo Coffee Tampa into a landmark.” – said Issam Ozeir, franchisee for Qargo Coffee, Tampa.\n\nQargo Coffee top-tier experience goes beyond traditional service and customizes each store menu (https://issuu.com/qargocoffee/docs/qctampamenu) according to the market needs and likes. For the Tampa store, located at International Plaza and Bay Street mall, the brand is inaugurating an alliance with Lotus Energy Drinks, offering customers a unique and healthy plant-based boost of energy. Besides that, the Tampa menu includes premium Bindi desserts and pastries, inspired by top flavors of Italian tradition, complementing a wide variety of grab and go options, like fresh sandwiches, wraps, salads and snacks.\n\nThe Big Guava residents are cordially invited to try first hand the Qargo Coffee experience and share the premium taste of Lavazza. To know more about this new location, visit https://www.qargocoffee.com/tampa.\n\nAbout Qargo Coffee\nQargo Coffee is a specialty coffee shop proudly serving world famous, sustainably-sourced Lavazza coffee, inspired handcrafted drinks, delicious Italian pastries, tasty baked goods, lunch and snack options. Founded in 2020, the Florida-based company is on a mission to create a new coffee shop experience and their locations create an oasis for a moment of relaxation, intimate conversation, gathering of friends and most importantly to empower the creator.\n\nThey are also committed to developing new locations with eco-friendly construction methods and sustainable best practices, while positioning to expand in select markets across the U.S.\n\nFind out more about their products and new locations on their social media and their website: https://linktr.ee/qargocoffee\n\nOr contact Qargo Coffee to get further information:\n\n",
                  "slug": "tampa-international-plaza-and-bay-street-opens-its-doors-to-qargo-coffee",
                  "createdAt": "2024-05-02T23:28:33.886Z",
                  "updatedAt": "2024-05-05T01:34:56.325Z",
                  "publishedAt": "2024-05-02T23:28:38.812Z",
                  "thumbnail": {
                      "data": {
                          "id": 207,
                          "attributes": {
                              "url": "/uploads/Long_Beach_Qargo_Coffee_b24cf16512.png"
                          }
                      }
                  }
              }
          }
      ],
      "meta": {
          "pagination": {
              "page": 1,
              "pageSize": 4,
              "pageCount": 1,
              "total": 3
          }
      }
  };
    
    const blogs = blogsResponse.data.map(({ attributes }) => {
      return {
        title: attributes.title,
        description: attributes.description,
        slug: attributes.slug,
        banner: attributes.banner,
        thumbnail: attributes.thumbnail,      
      }
    })
  
    return blogs;
  
    } catch (error) {
        return undefined;
    }
  }