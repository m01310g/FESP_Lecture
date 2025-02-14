import { DfMenuListUsecase } from "@/application/usecases/menuLookUp/DfMenuListUsecase";
import { MenuListDto } from "@/application/usecases/menuLookUp/dto/MenuListDto";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { SbMenuImageRepository } from "@/infrastructure/repositories/SbMenuImageRepository";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";
import { NextResponse } from "next/server";

// /api/menus -> UI가 사용하는 데이터 호출
export async function GET() {
    // 업무로직을 호출해서 그 결과를 UI에게 반환
    const menuRepository: MenuRepository = new SbMenuRepository();
    const menuImageRepository: MenuImageRepository =
        new SbMenuImageRepository();
    // 넘겨 받은 데이터를 API에 전달
    const menuListUsecase: DfMenuListUsecase = new DfMenuListUsecase(
        menuRepository,
        menuImageRepository
    );
    // Adapter
    const menuListDto: MenuListDto = await menuListUsecase.execute();

    // 데이터 전달
    return NextResponse.json(menuListDto);
}
