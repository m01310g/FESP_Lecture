import { DfCategoryListUsecase } from "@/application/usecases/category/DfCategoryListUsecase";
import { CategoryDto } from "@/application/usecases/category/dto/CategoryDto";
import CategoryRepository from "@/domain/repositories/CategoryRepository";
import { SbCategoryRepository } from "@/infrastructure/repositories/SbCategoryRepository";
import { NextResponse } from "next/server";

// /api/categries -> GET 목록 반환
export async function GET() {

    // 업로로직을 호출해서 그 결과를 UI 에게 반환
    const categoryRepository: CategoryRepository = new SbCategoryRepository();
    const menuListUsecase: DfCategoryListUsecase = new DfCategoryListUsecase(
        categoryRepository
    );

    const categoryListDto: CategoryDto[] = await menuListUsecase.execute();

    return NextResponse.json(categoryListDto);
}
