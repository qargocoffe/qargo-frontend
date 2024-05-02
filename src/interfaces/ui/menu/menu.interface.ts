import { Company } from "./company.interface";

export interface Menu {
    data: MenuData;
}

export interface MenuData {
    id:         number;
    attributes: MenuAttributes;
}

export interface MenuAttributes {
    title?:   string;
    logo:    Company;
    company: Company;
    menu:    MenuItem[];
}

export interface MenuItem {
    id:    number;
    title: string;
    slug:  string;
}
