import { Menu } from "../entities/Menu";

export interface MenuRepository {
    count(): number | PromiseLike<number>;
    findAll(keyword: string, from: number, to: number): Promise<Menu[]>;
}
