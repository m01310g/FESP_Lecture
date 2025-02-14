// 개수도 같이 반환하기 위해 Page 인터페이스 생성
export interface Page<T> {
    list: T[];
    count: number;
}
