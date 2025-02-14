import { Menu } from "@/domain/entities/Menu";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { Page } from "@/domain/repositories/Page";
import { createClient } from "@/utils/supabase/server";

export class SbMenuRepository implements MenuRepository {
    async count(): Promise<number> {
        const supabase = await createClient();
        const { count, error } = await supabase
            .from("menu")
            .select("*", { count: "exact", head: true }); // count: 데이터 개수 조회, head true이면 데이터 개수만 조회

        if (error) {
            throw new Error(error.message);
        }

        return count || 0;
    }

    async findAll(keyword: string, from: number, to: number): Promise<Menu[]> {
        const supabase = await createClient();
        const {
            data: menus,
            count,
            error,
        } = await supabase
            .from("menu")
            .select("*", { count: "exact", head: false }) // count: 데이터 개수 조회, head true이면 데이터 개수만 조회
            .like("kor_name", `%${keyword}%`) // keyword가 포함된 데이터 조회, ilike: 대소문자 구분 없이 조회
            .order("reg_date", { ascending: false }) // 정렬 기준 - ascending false: 내림차순
            // .limit(8); // 데이터 조회 개수 제한(상단 8개) -> 항상 1페이지만 보임
            .range(from, to); // 데이터 조회 범위 지정
        // 목록 반환
        // 단일 entity 반환
        // 필터링
        // 정렬
        // 집계: 단일 값(scalar) 반환

        // return menus || [];
        return { list: menus, count: count ?? 0 };
    }
}
