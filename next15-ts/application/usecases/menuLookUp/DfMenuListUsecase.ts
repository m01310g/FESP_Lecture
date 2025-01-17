import { MenuRepository } from "@/domain/repositories/MenuRepository";

// DTO 반환
export class DfMenuListUsecase {
    // 업무 구현
    constructor(private repository: MenuRepository) {}

    async execute() {
        await this.repository.findAll(); // 구현체가 바뀌어도 영향 x

        // MenuListDto로 변환 후 반환
        return {};
    }
}
