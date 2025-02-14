import { Member } from "../entities/Member";

export default interface MemberRepository {
    findByUsername(username: string): Promise<Member | null>;
    save(member: Member): Promise<Member>;
    findAll(): Promise<Member[]>;
    findById(username: string): Promise<Member | null>;
}