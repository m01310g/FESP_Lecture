// Symbol을 이용해 고유한 값으로 설정
let zoomIn = Symbol();

let kor = 30;
let colName = "math";

// key에 변수 삽입 가능
let obj = {
    kor: kor,
    [colName]: 40,
    total() {
        return this.kor + this.eng;
    },
};

console.log(obj.total());
