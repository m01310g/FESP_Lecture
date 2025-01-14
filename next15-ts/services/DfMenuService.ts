import { Menu } from "@/entities/Menu";
import { MenuListModel } from "@/models/MenuListModel";
import { SbMenuRepository } from "@/repositories/SbMenuRepository";

export class DfMenuService {
    // supabase를 이용한 repository 필요
    // constructor에 보호 모드로 선언하고 객체를 생성하도록 함
    constructor(
        private repository: SbMenuRepository = new SbMenuRepository()
    ) {}

    async getList(): Promise<MenuListModel[]> {
        // repository 객체의 fetchAll 메서드 호출
        const menus: Menu[] = await this.repository.fetchAll();

        return menus.map((menu) => {
            const model: MenuListModel = {
                ...menu,
                img: "default.svg",
            };
            return model;
        });
    }
}
