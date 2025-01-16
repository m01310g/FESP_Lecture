import { Menu } from "@/domain/entities/Menu";
import { createClient } from "@/utils/supabase/server";

export class SbMenuRepository {
    async fetchAll(): Promise<Menu[]> {
        const supabase = await createClient();
        const { data: menus } = await supabase.from("menu").select();

        return menus || [];
    }
}
