import { Member } from "@/domain/entities/Member";
import MemberRepository from "@/domain/repositories/MemberRepository";
import { createClient } from "@/utils/supabase/server";

export class SbMemberRepository implements MemberRepository {
  async findByUsername(username: string): Promise<Member | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("member")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Error fetching member by username:", error);
      return null;
    }

    return data ? (data as Member) : null;

  }

  async save(member: Member): Promise<Member> {

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("member") // 'menus' 테이블에 삽입
      .insert([{
        username: member.username,
        email: member.email,
        password: member.password,
        //created_at: new Date().toISOString(), // Date 객체를 ISO 문자열로 변환
      }])
      .select() // 삽입된 데이터를 반환

    if (error) {
      console.error("Supabase Error:", error.details || error.message || error);
      console.error("Error saving member to Supabase:", error);
      throw new Error("Failed to save member");
    }

    const savedMember = data[0]; // 첫 번째 저장된 행만 반환

    // 저장된 데이터 매핑 및 반환
    return {
      id: savedMember.id,
      username: savedMember.username,
      email: savedMember.email,
      password: savedMember.password,
      createdAt: savedMember.created_at,
    };

    // Supabase 회원가입 처리
    // const supabase = await createClient();
    // const { error: authError, data: authData } = await supabase.auth.signUp({
    //   email,
    //   password,
    // });

    // if (authError) {
    //   throw new Error(authError.message);
    // }

    // console.log("==== SbAuthRepository.signUp ====");
    // console.log("authData", authData);
    // console.log("==================================");

    // const userId = authData.user?.id ?? "";
  }

  async findById(username: string): Promise<Member | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("member")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Error fetching member by username:", error);
      return null;
    }

    return data ? (data as Member) : null;
  }

  async findAll(): Promise<Member[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("member").select("*");

    if (error) {
      console.error("Error fetching all members:", error);
      return [];
    }

    return data || [];
  }
}
