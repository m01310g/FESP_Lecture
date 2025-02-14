export interface MenuCreatedDto {
    id: number;
    korName: string;
    engName: string;
    price: number;
    description: string;
    regDate: Date;
    categoryId: number;
    regMemberId: number;
}