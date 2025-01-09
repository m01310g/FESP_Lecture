export default interface ILens {
    // 함수의 반환 값도 형식을 작성해야 함
    zoomIn(level: number): void;
    zoomOut(level: number): void;
}
