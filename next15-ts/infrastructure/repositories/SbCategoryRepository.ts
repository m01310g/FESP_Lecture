import CategoryRepository from "@/domain/repositories/CategoryRepository";
import { createClient } from "@/utils/supabase/server";

export class SbCategoryRepository implements CategoryRepository {
    async findAll() {
        const supabase = await createClient();
        const { data } = await supabase
            .from("category")
            .select("*")


        return data?.map(
            (category) => ({
                id: category.id,
                name: category.name,
                createdAt: category.created_at,
                regMemberId: category.reg_member_id,
            })
        ) || [];

    }
}