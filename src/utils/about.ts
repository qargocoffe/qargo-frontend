import { Partner, PartnersResponse } from '../interfaces/partner/partner.interface';


export const getPartners = async() :Promise<Partner[] | undefined> => {
    try {
        const partnersResponse: PartnersResponse = await fetch(`http://localhost:1337/api/partners?populate=*`)
            .then(res => res.json());
    
  
    const partners = partnersResponse.data.map(({ attributes }) => {
    console.log(attributes)
      return {
        title: attributes.title,
        description: attributes.description,
        logo: attributes.logo,
        banner: attributes.banner,      
      }
    })
  
    return partners;
  
    } catch (error) {
        return undefined;
    }
  }