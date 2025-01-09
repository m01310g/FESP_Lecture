export default class Exam {
    kor = 0;
    eng = 0;
    math = 0;

    constructor(kor = 0, eng = 0, math = 0) {
        // this가 constructor에서 전달 받은 객체
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    // instance가 아님(this를 넘겨 받지 않음)
    // static: instance가 필요 없는 method
    static create() {
        return new Exam();
    }

    total() {
        return this.kor + this.eng + this.math;
    }
    avg() {
        return this.total() / 3;
    }
}

// 아무 값도 전달을 안 하면 기본값이 전달됨
// 값을 받을 수 있는 변수가 있어야 함
// let exam = new Exam(10, 20, 30);
// console.log(exam.total());
// console.log(exam.kor, exam.eng, exam.math);

let exam = Exam.create();
console.log(exam.total());
