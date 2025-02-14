import { Menu } from "../entities/Menu";

export interface MenuRepository {
  findById(id: string | undefined): Menu | PromiseLike<Menu>;
  save(menu: Menu): Promise<Menu>;
  count(): number | PromiseLike<number>;
  findAll(
    keyword: string,
    from: number,
    to: number,
    categoryId: string
  ): Promise<Menu[]>;
}
