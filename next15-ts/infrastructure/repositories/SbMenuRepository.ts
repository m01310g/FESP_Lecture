import { Menu } from "@/domain/entities/Menu";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { createClient } from "@/utils/supabase/server";

export class SbMenuRepository implements MenuRepository {
    async findAll(): Promise<Menu[]> {
        const supabase = await createClient();
        const { data: menus } = await supabase.from("menu").select();

        return menus || [];
    }
}
