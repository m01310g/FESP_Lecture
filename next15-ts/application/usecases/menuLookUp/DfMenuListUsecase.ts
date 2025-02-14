import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { MenuListDto } from "./dto/MenuListDto";
import { Menu } from "@/domain/entities/Menu";
import { MenuDto } from "./dto/MenuDto";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { MenuImage } from "@/domain/entities/MenuImage";

// DTO 반환
export class DfMenuListUsecase {
    // 업무 구현
    constructor(
        private repository: MenuRepository,
        private menuImageRepository: MenuImageRepository
    ) {}

    async execute(
        keyword: string = "",
        page: number = 1
    ): Promise<MenuListDto> {
        // 기본 값 설정
        const from = (page - 1) * 8;
        const to = page * 8 - 1;

        // repository는 테이블 모양 그대로 반환
        const menus: Menu[] = await this.repository.findAll(keyword, from, to); // 구현체가 바뀌어도 영향 x

        const menuDtos: MenuDto[] = await Promise.all(
            // 비동기 -> 완료될 때까지 대기
            menus.map(async (menu: Menu) => {
                const image: MenuImage | null =
                    await this.menuImageRepository.findDefaultImageByMenuId(
                        menu.id
                    );
                return {
                    ...menus,
                    img: image ? image.src : "default.svg", // 대표 이미지 한 개, isDefault가 true인 이미지, menu.id와 연결된 이미지
                };
            })
        );

        const totalCount: number = await this.repository.count();

        // MenuListDto로 변환 후 반환
        return {
            menus: menuDtos,
            // totalCount: this.repository.count(),
            totalCount,
            totalPages: Math.ceil(totalCount / 8), // count를 8개씩 나누고 값 올림
            hasPreviousPage: page > 1,
            hasNextPage: page < Math.ceil(totalCount / 8),
            pages: Array.from(
                { length: Math.ceil(totalCount / 8) },
                (_, i) => i + 1
            ), // 페이지 계산
        };
    }
}
