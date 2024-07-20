export interface StoresResponse {
    data: DatumStore[];
    meta: MetaStore;
}

export interface DatumStore {
    id:         number;
    attributes: Store;
}

export interface Store {
    title:       string;
    direction:   string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    telephone:   string;
    lng:         null | string;
    lat:         null | string;
}

export interface MetaStore {
    pagination: PaginationStore;
}

export interface PaginationStore {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
