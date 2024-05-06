export interface BlogsResponse {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: Blog;
}

export interface Blog {
    title:       string;
    description: string;
    publishied?:  Date;
    content?:     string;
    slug?:        string;
    createdAt?:   Date;
    updatedAt?:   Date;
    publishedAt?: Date;
    thumbnail?:   Thumbnail;
}

export interface Thumbnail {
    data: Data;
}
export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
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
