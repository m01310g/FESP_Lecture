import MemberRepository from "@/domain/repositories/MemberRepository";
import bcrypt from "bcrypt";
import MemberLoginDto from "./dto/MemberLoginDto";
import MemberAuthenticatedDto from "./dto/MemberAuthenticatedDto";

export class LoginUsecase {
  constructor(private repository: MemberRepository) { }

  async execute(data: MemberLoginDto): Promise<MemberAuthenticatedDto> {
    const { username, password } = data;
    const member = await this.repository.findByUsername(username);
    if (!member) {
      throw new Error("Invalid email or password");
    }

    console.log("==== LoginUsecase.execute ====");
    console.log("member", member);
    console.log("password, member.password", password, member.password);
    console.log("===============================");

    const isValidPassword = await bcrypt.compare(password, member.password);
    if (!isValidPassword) {
      throw new Error("Invalid email or password");
    }

    return {
      id: member.id,
      username: member.username,
      email: member.email,
      createdAt: member.createdAt,
      roles: ["USER"],
    };
  }
}
