import { Member } from "@/domain/entities/Member";
import AuthRepository from "@/domain/repositories/AuthRepository";
import { createClient } from "@/utils/supabase/server";

export class SbAuthRepository implements AuthRepository {
    async signUp(member: Member): Promise<string> {
        const { email, password } = member;

        // Supabase 회원가입 처리
        const supabase = await createClient();
        const { error: authError, data: authData } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            throw new Error(authError.message);
        }

        console.log("==== SbAuthRepository.signUp ====");
        console.log("authData", authData);
        console.log("==================================");

        const userId = authData.user?.id ?? '';

        return userId;

    }

}