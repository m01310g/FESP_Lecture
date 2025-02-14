// import { MenuImage } from "./MenuImage";

export interface Menu {
    id: number;
    korName: string;
    engName: string;
    price: number;
    regDate: Date;
    categoryId: number;
    regMemberId: number;
    description: string;
}