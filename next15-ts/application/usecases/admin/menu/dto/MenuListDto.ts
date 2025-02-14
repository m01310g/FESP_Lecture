import { MenuDto } from "./MenuDto";

export interface MenuListDto {
    menus: MenuDto[];

    // pager 를 위한 데이터
    totalCount: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    pages: number[];
}