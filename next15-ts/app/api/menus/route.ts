import { NextResponse } from "next/server";

export async function GET() {
    // 업무로직을 호출해서 그 결과를 UI 에게 반환
    const menuListUsecase: MenuListUsecase;
    return NextResponse.json([
        { id: 1, name: "Menu 1" },
        { id: 2, name: "Menu 2" },
    ]);
}
