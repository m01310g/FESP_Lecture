export default interface MemberAuthenticatedDto {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    roles: string[];
}