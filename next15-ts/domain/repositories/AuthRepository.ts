import { Member } from "../entities/Member";

export default interface AuthRepository {
    signUp(member: Member): Promise<string>;
}