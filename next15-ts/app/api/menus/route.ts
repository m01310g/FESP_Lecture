import { NextResponse } from "next/server";

export async function GET() {
    // 업무 로직 호출해서 그 결과를 UI에 반환
    return NextResponse.json([
        { id: 1, name: "menu 1" },
        { id: 2, name: "menu 2" },
    ]);
}
