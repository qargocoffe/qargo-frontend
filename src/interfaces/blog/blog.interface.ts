import { Meta } from "../meta/meta.interface";
import { Thumbnail } from "../thumbnail/thumbnail.interface";

export interface BlogResponse {
  data: Blog[];
  meta: Meta;
}

export interface Blog {
  id:          number;
  title:       string;
  description: string;
  publishied:  Date;
  content:     string;
  slug:        null | string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  thumbnail:   Thumbnail;
}