import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { MenuListDto } from "./dto/MenuListDto";
import { Menu } from "@/domain/entities/Menu";
import { MenuDto } from "./dto/MenuDto";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { MenuImage } from "@/domain/entities/MenuImage";

export class DfMenuListUsecase {
  constructor(
    private repository: MenuRepository,
    private menuImageRepository: MenuImageRepository
  ) {}

  // execute();
  async execute(
    keyword: string = "",
    page: number = 1,
    categoryId: string = ""
  ): Promise<MenuListDto> {
    const from = (page - 1) * 8;
    const to = page * 8 - 1;

    const menus: Menu[] = await this.repository.findAll(
      keyword,
      from,
      to,
      categoryId
    );

    const menuDtos: MenuDto[] = await Promise.all(
      menus.map(async (menu: Menu) => {
        const image: MenuImage[] =
          await this.menuImageRepository.findAllByMenuId(menu.id);
        console.log("image", image);

        return {
          ...menu,
          images: [],
        };
      })
    );

    const totalCount: number = await this.repository.count();

    return {
      menus: menuDtos,
      totalCount,
      totalPages: Math.ceil(totalCount / 8),
      hasPreviousPage: page > 1,
      hasNextPage: page < Math.ceil(totalCount / 8),
      pages: Array.from({ length: Math.ceil(totalCount / 8) }, (_, i) => i + 1),
    }; // MenuListDto로 변환해서 반환
  }
}
