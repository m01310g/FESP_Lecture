import ILens from "./ilens.js";

// dependency
export default class Lens {
    // 줌 조절
    [ILens.zoomIn](level) {
        console.log(`Zoomed in by ${level} levels.`);
    }

    [ILens.zoomOut](level) {
        console.log(`Zoomed out by ${level} levels.`);
    }
}
