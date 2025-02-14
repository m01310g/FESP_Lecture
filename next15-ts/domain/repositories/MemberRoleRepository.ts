import { MemberRole } from "../entities/MemberRole";

export interface MemberRoleRepository {
    findAllByMemberId(id: number): Promise<MemberRole[]>;
    findAllByUsername(username: string): Promise<MemberRole[]>;
}
