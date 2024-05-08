export interface PartnersResponse {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: Partner;
}

export interface Partner {
    title:       string;
    description: null | string;
    banner:      Banner;
    logo:        Logo;
}

export interface Banner {
    data: BannerData;
}

export interface BannerData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           PurpleFormats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    PNG = ".png",
}

export interface PurpleFormats {
    thumbnail: Small;
    small:     Small;
}

export interface Small {
    name:        string;
    hash:        string;
    ext:         EXT;
    mime:        MIME;
    path:        null;
    width:       number;
    height:      number;
    size:        number;
    sizeInBytes: number;
    url:         string;
}

export enum MIME {
    ImagePNG = "image/png",
}

export interface Logo {
    data: LogoData;
}

export interface LogoData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           FluffyFormats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface FluffyFormats {
    thumbnail: Small;
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
