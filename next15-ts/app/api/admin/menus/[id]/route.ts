import { DfMenuDetailUsecase } from "@/application/usecases/admin/menu/DfMenuDetailUsecase";
import { MenuDetailDto } from "@/application/usecases/admin/menu/dto/MenuDetailDto";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { SbMenuImageRepository } from "@/infrastructure/repositories/SbMenuImageRepository";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";
import { NextRequest, NextResponse } from "next/server";

// /api/menus -> GET 목록 반환
export async function GET(request: NextRequest) {
  // 쿼리스트링 파싱
  // const { searchParams } = request.nextUrl;
  // const page = parseInt(searchParams.get("p") || "1", 10); // 페이지 값 (기본값 1)
  // const categoryId: string = searchParams.get("c") || "";
  // const keyword = searchParams.get("keyword") || ""; // 검색어 (기본값 "")

  // 업로로직을 호출해서 그 결과를 UI 에게 반환
  const menuRepository: MenuRepository = new SbMenuRepository();
  const menuImageRepository: MenuImageRepository = new SbMenuImageRepository();
  const menuDetailUsecase: DfMenuDetailUsecase = new DfMenuDetailUsecase(
    menuRepository,
    menuImageRepository
  );

  // https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl
  const id = request.nextUrl.pathname.split("/").pop();
  console.log("=== GET /api/admin/menus/[id] ===");
  console.log("id", id);
  console.log("=================================");

  const menuDetailDto: MenuDetailDto = await menuDetailUsecase.execute(id);
  return NextResponse.json(menuDetailDto);
}
