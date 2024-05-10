
import { CategoriesResponse, Category } from "@/interfaces/our-menu/category.interface";

export const getCategories = async() :Promise<Category[] | undefined> => {
    try {
        const categoriesResponse: CategoriesResponse = await fetch(`http://localhost:1337/api/categories?populate[1]=thumbnail`)
            .then(res => res.json());

    const categories = categoriesResponse.data.map(({ attributes}) => {
      return {
        title: attributes.title,
        slug: attributes.slug,
        thumbnail: attributes.thumbnail,
      }
    })
    console.log(categories)
    return categories;
  
    } catch (error) {
        return undefined;
    }
  }