import { Menu } from "@/domain/entities/Menu";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { createClient } from "@/utils/supabase/server";

export class SbMenuRepository implements MenuRepository {
  async findById(id: string): Promise<Menu> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("menu")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching menu by ID:", error.message);
      throw new Error("Failed to fetch menu");
    }

    return {
      id: data.id,
      korName: data.kor_name,
      engName: data.eng_name,
      price: data.price,
      description: data.description,
      categoryId: data.category_id,
      regDate: new Date(data.reg_date),
      regMemberId: data.reg_member_id,
      // images: [],
    };
  }

  async save(menu: Menu): Promise<Menu> {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("menu")
        .insert([
          {
            kor_name: menu.korName,
            eng_name: menu.engName,
            price: menu.price,
            description: menu.description,
            category_id: menu.categoryId,
            reg_date: menu.regDate.toISOString(),
            reg_member_id: menu.regMemberId,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase Error:", error.details || error.message || error);
        throw new Error("Failed to save menu");
      }

      const savedMenu = data[0];
      return {
        id: savedMenu.id,
        korName: savedMenu.kor_name,
        engName: savedMenu.eng_name,
        price: savedMenu.price,
        description: savedMenu.description,
        categoryId: savedMenu.category_id,
        regDate: new Date(savedMenu.reg_date),
        regMemberId: savedMenu.reg_member_id,
        // images: [],
      };
    } catch (err) {
      console.error("Unexpected error:", err);
      throw new Error("Unexpected error occurred while saving menu");
    }
  }

  async count(): Promise<number> {
    const supabase = await createClient();
    const { count, error } = await supabase
      .from("menu")
      .select("*", { count: "exact", head: true });

    if (error) {
      throw new Error(error.message);
    }

    return count || 0;
  }

  async findAll(
    keyword: string,
    from: number,
    to: number,
    categoryId: string
  ): Promise<Menu[]> {
    const supabase = await createClient();
    let query = supabase.from("menu").select("*");

    if (categoryId !== "") query = query.eq("category_id", categoryId);
    if (keyword != null) query = query.ilike("kor_name", `%${keyword}%`);

    query = query.order("reg_date", { ascending: false }).range(from, to);

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching menus:", error.message);
      throw new Error("Failed to fetch menus");
    }

    const menus: Menu[] = data.map((menu): Menu => {
      return {
        id: menu.id,
        korName: menu.kor_name,
        engName: menu.eng_name,
        price: menu.price,
        regDate: new Date(menu.reg_date),
        regMemberId: menu.reg_member_id,
        categoryId: menu.category_id,
        description: menu.description,
        // images: [],
      };
    });
    return menus || [];
  }
}
