import { Category } from "../entities/Category";

export default interface CategoryRepository {
    findAll(): Promise<Category[]>;
}