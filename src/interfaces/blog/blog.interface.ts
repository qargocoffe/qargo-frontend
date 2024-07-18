export interface BlogsResponse {
    data: Datum1[];
    meta: Meta1;
}

export interface Datum1 {
    id:         number;
    attributes: Blog;
}

export interface Blog {
    title:       string;
    description: string;
    publishied?:  Date;
    content?:     string;
    slug?:        string;
    banner: string,
    createdAt?:   Date;
    updatedAt?:   Date;
    publishedAt?: Date;
    thumbnail?:   Thumbnail;
}

export interface Thumbnail {
    data: Data1;
}
export interface Data1 {
    id:         number;
    attributes: DataAttributes1;
}

export interface DataAttributes1 {
    url: string;
}

export interface Meta1 {
    pagination: Pagination1;
}

export interface Pagination1 {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
