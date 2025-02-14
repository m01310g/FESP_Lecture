// import { MenuImage } from "./MenuImage";

import { MenuImage } from "@/domain/entities/MenuImage";

export interface MenuDto {
  id: number;
  korName: string;
  engName: string;
  price: number;
  regDate: Date;
  categoryId: number;
  regMemberId: number;
  // likeCount: number;

  // 자식으로 관계를 가지고 있는 객체 집합
  images: MenuImage[];
}
