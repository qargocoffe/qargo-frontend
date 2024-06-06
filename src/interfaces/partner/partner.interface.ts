export interface PartnersResponse {
    data: Datum2[];
    meta: Meta2;
}

export interface Datum2 {
    id:         number;
    attributes: Partner;
}

export interface Partner {
    title:       string;
    description: null | string;
    banner:      Banner11;
    logo:        Logo;
}

export interface Banner11 {
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
    attributes: FluffyAttributes1;
}

export interface FluffyAttributes1 {
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

export interface Meta2 {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
