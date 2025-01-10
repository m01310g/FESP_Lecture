import Exam from "./exam.js";

// extends ~: Is a Relationship
class NewExam extends Exam {
    // Has a Inheritance
    // #exam = new Exam();
    #com = 0;

    // 생성자
    constructor(kor, eng, math, com) {
        // this 호출 시 constructor 생성 -> constructor가 this 호출... 무한루프
        // this();
        super(kor, eng, math);
        this.#com = com;
    }

    // override method
    total() {
        return super.total() + this.#com;
    }
}

let ex1 = new NewExam(1, 1, 1, 1);
console.log(ex1.total());

let ex2 = new NewExam(1, 1, 1, 1);
let ex3 = new Exam(1, 1, 1);
