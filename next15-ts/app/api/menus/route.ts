import { DfMenuListUsecase } from "@/application/usecases/menu/DfMenuListUsecase";
import { MenuListDto } from "@/application/usecases/menu/dto/MenuListDto";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { SbMenuImageRepository } from "@/infrastructure/repositories/SbMenuImageRepository";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";
import { NextRequest, NextResponse } from "next/server";


// /api/menus -> GET 목록 반환
export async function GET(request: NextRequest) {
    // 쿼리스트링 파싱
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("p") || "1", 10); // 페이지 값 (기본값 1)
    const categoryId: string = searchParams.get("c") || "";
    const keyword = searchParams.get("keyword") || ""; // 검색어 (기본값 "")

    console.log("== GET /api/menus ==");
    console.log("p", page);
    console.log("c", categoryId);
    console.log("keyword", keyword);
    console.log("====================");

    // 업로로직을 호출해서 그 결과를 UI 에게 반환
    const menuRepository: MenuRepository = new SbMenuRepository();
    const menuImageRepository: MenuImageRepository = new SbMenuImageRepository();
    const menuListUsecase: DfMenuListUsecase = new DfMenuListUsecase(
        menuRepository,
        menuImageRepository
    );

    const menuListDto: MenuListDto = await menuListUsecase.execute(
        keyword,
        page,
        categoryId
    );

    return NextResponse.json(menuListDto);
}
