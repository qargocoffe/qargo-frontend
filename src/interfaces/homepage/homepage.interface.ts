
export interface HomepageResponse {
    data: HomepageResponseData;
    meta: Meta;
}

export interface HomepageResponseData {
    id:         number;
    attributes: HomePage;
}

export interface HomePage {
    title:       string;
    description: string;
    link:        string;
    createdAt?:   Date;
    updatedAt?:   Date;
    publishedAt?: Date;
    banners:     Banner[];
    picture:     Picture;
}

export interface Banner {
    id:     number;
    slug:   string;
    banner: Picture;
}

export interface Picture {
    data: PictureData;
}

export interface PictureData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Medium;
    small:     Medium;
    medium:    Medium;
}

export interface Medium {
    name:        string;
    hash:        string;
    ext:         string;
    mime:        string;
    path:        null;
    width:       number;
    height:      number;
    size:        number;
    sizeInBytes: number;
    url:         string;
}

export interface Meta {
}
