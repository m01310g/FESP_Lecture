import { Menu } from "../entities/Menu";

export interface MenuRepository {
    findAll(): Promise<Menu[]>;
}
