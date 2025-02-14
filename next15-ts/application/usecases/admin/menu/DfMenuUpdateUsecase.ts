import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { MenuCreateDto } from "./dto/MenuCreateDto";
import { Menu } from "@/domain/entities/Menu";
import { MenuCreatedDto } from "./dto/MenuCreatedDto";

export class DfMenuCreateUsecase {
  constructor(private repository: MenuRepository) { }

  async execute(menuCreateDto: MenuCreateDto): Promise<MenuCreatedDto> {
    // 1. DTO를 이용해 새 메뉴 엔티티 생성

    const newMenu: Menu = {
      id: 0, // ID는 DB에서 자동 생성
      korName: menuCreateDto.korName,
      engName: menuCreateDto.engName,
      price: menuCreateDto.price,
      description: menuCreateDto.description,
      categoryId: menuCreateDto.categoryId,
      // regDate: new Date(), // 등록 날짜
      regDate: new Date(), // 등록 날짜
      regMemberId: 1, // 등록한 관리자 ID (예시)
    };

    // 2. Repository를 사용해 메뉴 저장
    const savedMenu = await this.repository.save(newMenu);

    // 3. 저장된 데이터를 MenuCreatedDto로 변환해 반환
    const menuCreatedDto: MenuCreatedDto = {
      id: savedMenu.id,
      korName: savedMenu.korName,
      engName: savedMenu.engName,
      price: savedMenu.price,
      description: savedMenu.description,
      regDate: savedMenu.regDate,
      categoryId: savedMenu.categoryId,
      regMemberId: savedMenu.regMemberId,
    };

    return menuCreatedDto;
  }
}
