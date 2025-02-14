import { MemberRole } from "@/domain/entities/MemberRole";
import { MemberRoleRepository } from "@/domain/repositories/MemberRoleRepository";
import { createClient } from "@/utils/supabase/server";


export class SbMemberRoleRepository implements MemberRoleRepository {
    async findAllByUsername(username: string): Promise<MemberRole[]> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("member_role")
            .select("*")
            .eq("username", username);

        if (error) {
            console.error("Error fetching member roles by username:", error);
            throw error;
        }

        return data as MemberRole[];
    }

    async findAllByMemberId(id: number): Promise<MemberRole[]> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("member_role")
            .select("*")
            .eq("member_id", id);

        if (error) {
            console.error("Error fetching member roles by member ID:", error);
            throw error;
        }

        return data as MemberRole[];
    }
}
