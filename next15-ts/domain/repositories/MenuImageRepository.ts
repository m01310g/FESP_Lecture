import { Menu } from "../entities/Menu";
import { MenuImage } from "../entities/MenuImage";

export interface MenuImageRepository {
    findAllByMenuId(menuId: number): Promise<Menu[]>;
    findDefaultImageByMenuId(menuId: number): Promise<MenuImage>;
}
