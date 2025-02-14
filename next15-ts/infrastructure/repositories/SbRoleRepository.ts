import { Role } from "@/domain/entities/Role";
import { RoleRepository } from "@/domain/repositories/RoleRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRoleRepository implements RoleRepository {

    public async findAll(): Promise<Role[]> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("role")
            .select("*")

        if (error) {
            console.error("Error fetching member roles by username:", error);
            throw error;
        }

        return data as Role[];
    }
}