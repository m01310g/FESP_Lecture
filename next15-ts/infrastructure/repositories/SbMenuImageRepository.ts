import { MenuImage } from "@/domain/entities/MenuImage";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbMenuImageRepository implements MenuImageRepository {
  async findAllByMenuId(menuId: number): Promise<MenuImage[]> {
    const supabase = await createClient();
    const { data } = await supabase
      .from("menu_image")
      .select("*")
      .eq("menu_id", menuId);

    return data || [];
  }

  async findDefaultImageByMenuId(menuId: number): Promise<MenuImage> {
    const supabase = await createClient();
    const { data } = await supabase
      .from("menu_image")
      .select("*")
      .eq("menu_id", menuId)
      .eq("is_default", true) // ==
      .single();

    return data || null;
  }
}
