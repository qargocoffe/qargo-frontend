

export interface Company {
    data: CompanyData;
}

export interface CompanyData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name: string;
    url:  string;
}
