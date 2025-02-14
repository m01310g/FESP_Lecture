import { Role } from "../entities/Role";

export interface RoleRepository {
    findAll(): Promise<Role[]>;
}