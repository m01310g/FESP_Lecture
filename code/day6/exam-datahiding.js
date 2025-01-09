class Exam {
    #kor = 0;
    #eng = 0;
    #math = 0;
    // static으로 값이 할당됨, 개별로 지정할 필요 없는 변수
    static #description = "Exam 설명";

    constructor(kor = 0, eng = 0, math = 0) {
        // 넘겨 받는 값이 있을 경우
        // this가 constructor에서 전달 받은 객체
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
    }

    // getter과 setter 사용 여부에 대한 차이점
    // getter
    get kor() {
        return this.#kor;
    }

    get eng() {
        return this.#eng;
    }

    get math() {
        return this.#math;
    }

    // setter
    set kor(value) {
        this.#kor = value;
    }

    set eng(value) {
        this.#eng = value;
    }

    set math(value) {
        this.#math = value;
    }

    total() {
        return this.#kor + this.#eng + this.#math;
    }
    avg() {
        return this.total() / 3;
    }
}

// 아무 값도 전달을 안 하면 기본값이 전달됨
// 값을 받을 수 있는 변수가 있어야 함
let exam = new Exam(10, 20, 30);
console.log(exam.total());
console.log(exam.kor, exam.eng, exam.math);
