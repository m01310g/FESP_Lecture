import { MenuImage } from "../entities/MenuImage";

export interface MenuImageRepository {
    findAllByMenuId(menuId: number): Promise<MenuImage[]>;
    findDefaultImageByMenuId(menuId: number): Promise<MenuImage>;

    /*
    findXXX
    updagte();
    delete();
    insert();
    */
}   