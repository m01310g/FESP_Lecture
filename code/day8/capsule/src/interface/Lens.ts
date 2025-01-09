import ILens from "./ILens";

// class 생성
// interface 내부에 있는 함수를 구현하고 있음
export default class Lens implements ILens {
    zoomIn(level: number): void {
        console.log("Zoom In");
    }

    zoomOut(level: number): void {
        console.log("Zoom Out");
    }
}
