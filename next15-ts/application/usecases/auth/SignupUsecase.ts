// import AuthRepository from "@/domain/repositories/AuthRepository";
import MemberRepository from "@/domain/repositories/MemberRepository";
// import UserCreateDto from "./dto/MemberCreateDto";
// import UserCreatedDto from "./dto/UserCreatedDto";
import { Member } from "@/domain/entities/Member";
import MemberCreateDto from "./dto/MemberCreateDto";
import bcrypt from "bcrypt";

export default class SignupUsecase {
  constructor(
    // private repository: AuthRepository
    private repository: MemberRepository
  ) {}

  async execute(data: MemberCreateDto): Promise<Member> {
    const { username, email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const member: Member = {
      id: 0,
      username: username,
      email: email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    // Supabase 회원가입 처리
    const newMember = await this.repository.save(member);

    // 회원가입 성공 시 반환할 DTO 객체 매핑 및 반환
    return newMember;

    // 추가 정보 저장
    // if (userId) {
    //     const { error: dbError } = await supabase
    //         .from("member")
    //         .insert([{ id: userId, name, username }]);

    //     if (dbError) {
    //         throw new Error(dbError.message);
    //     }
    // }
  }
}
