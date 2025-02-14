import CategoryRepository from "@/domain/repositories/CategoryRepository";

export class DfCategoryListUsecase {
    constructor(private repository: CategoryRepository) {
        this.repository = repository;
    }
    async execute() {
        const categories = await this.repository.findAll();

        return categories;
    }
}