import { Meta } from "../meta/meta.interface";
import { Thumbnail } from "../thumbnail/thumbnail.interface";

export interface StoreResponse {
    data: Store[];
    meta: Meta;
}

export interface Store {
    id:          number;
    title:       string;
    direction:   string;
    telephone:   string;
    lng:         string;
    lat:         string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    isOpen:      boolean;
    thumbnail:   Thumbnail;
}

