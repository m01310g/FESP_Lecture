import { MenuRepository } from "@/domain/repositories/MenuRepository";

import { Menu } from "@/domain/entities/Menu";
import { MenuDetailDto } from "./dto/MenuDetailDto";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";

export class DfMenuDetailUsecase {
    constructor(private repository: MenuRepository, private imgRepository: MenuImageRepository) { }

    async execute(id: string | undefined): Promise<MenuDetailDto> {
        const menu: Menu = await this.repository.findById(id);

        const menuDetailDto: MenuDetailDto = {
            id: menu.id,
            korName: menu.korName,
            engName: menu.engName,
            price: menu.price,
            description: menu.description,
            categoryId: menu.categoryId,
            regDate: menu.regDate,
            regMemberId: menu.regMemberId,
        };

        return menuDetailDto;
    }
}
