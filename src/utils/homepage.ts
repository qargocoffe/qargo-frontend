import { HomePage, HomepageResponse } from "@/interfaces";

export const getHomePage = async() :Promise<HomePage | undefined> => {
    try {
        const homepageResponse: HomepageResponse = await fetch(`http://localhost:1337/api/homepage?
        populate[0]=banners
        &populate[1]=banners.banner
        &populate[2]=picture`)
        .then(res => res.json());
    
      const { data: { attributes: { title, description, link, picture,banners } } } = homepageResponse;
      console.log(title, description, link, picture,banners)
      
      return {title, description, link, picture,banners}
  
    } catch (error) {
        return undefined;
    }
  }