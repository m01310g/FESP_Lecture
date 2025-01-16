import { MenuDto } from "./MenuDto";

export interface MenuListDto {
    menus: MenuDto[];

    // 페이저 구현을 위한 데이터
    totalCount: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    pages: number[]; // 페이지 계산
}
