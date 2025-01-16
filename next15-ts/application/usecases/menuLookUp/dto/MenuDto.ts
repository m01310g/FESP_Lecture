export interface MenuDto {
    id: number;
    korName: string;
    engName: string;
    price: number;
    regDate: Date;
    categoryId: number;
    regMemberId: number;
    img: string; // 대표 이미지
    likeCount: number;
    // image: 자식으로 관계를 가지고 있는 객체 집합(1:n)
    // images: MenuImage[];
}
