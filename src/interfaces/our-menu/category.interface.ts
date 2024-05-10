export interface CategoriesResponse {
    data: Categories[];
    meta: Meta;
}

export interface Categories {
    id:         number;
    attributes: Category;
}

export interface Category {
    title:         string;
    slug:          string;
    thumbnail:     Coffees;
    SEO?:           SEO;
    subcategories?: Coffees;
    coffees?:       Coffees;
}

export interface SEO {
    id:              number;
    MetaTitle:       string;
    MetaDescription: string;
}

export interface Coffees {
    data: CoffeesDatum[] | null;
}

export interface CoffeesDatum {
    id:         number;
    attributes: Coffee;
}

export interface Coffee {
    title:       string;
    slug:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    status:      boolean;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
