import MemberCreateDto from "@/application/usecases/auth/dto/MemberCreateDto";
import SignupUsecase from "@/application/usecases/auth/SignupUsecase";
import MemberRepository from "@/domain/repositories/MemberRepository";
import { SbMemberRepository } from "@/infrastructure/repositories/SbMemberRepository";
// import { SbAuthRepository } from "@/infrastructure/repositories/SbAuthRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // const { name, username, email, password } = await request.json();
    const memberCreateDto: MemberCreateDto = await request.json();

    const { name, username, email, password } = memberCreateDto;
    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { message: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // Usecase 호출
    const memberRepository: MemberRepository = new SbMemberRepository();
    const usecase = new SignupUsecase(memberRepository);
    const newOne = await usecase.execute(memberCreateDto);

    const memberCreatedDto = {
      ...newOne
    };

    // 반환된 UserCreatedDto를 JSON 응답으로 변환
    return NextResponse.json(
      {
        message: "회원가입 성공",
        user: memberCreatedDto,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("회원가입 실패:", error.message);
    } else {
      console.error("회원가입 실패:", error);
    }
    return NextResponse.json(
      { message: (error as Error).message || "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
