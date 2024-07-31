import { Meta } from "../meta/meta.interface";
import { Thumbnail } from "../thumbnail/thumbnail.interface";

export interface WorkerResponse {
    data: Worker[];
    meta: Meta;
}

export interface Worker {
    id:          number;
    name:        string;
    position:    string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    thumbnail:   Thumbnail;
}

