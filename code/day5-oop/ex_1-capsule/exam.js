// exam 데이터 관리하는 서비스 -> 데이터 직접 다루는 코드 추가
// exam.js가 하는 역할을 exam 단위 데이터
/*
    자바스크립트의 캡슐화 도구
    1. function
    2. class
*/

// 사용 방법: new Exam()
// 생성자는 this를 참조하고 있기 때문에 return 값이 없어도 됨
function Exam(kor, eng, math) {
    // new를 통해서 호출이 되었다면 this 객체를 받아서 초기화를 하는 역할
    // 객체를 만들 때마다 달라져야 하는 것만 정의
    // return { kor: 10, eng: 30 };
    this.kor = kor || 0;
    this.eng = eng || 0;
    // this.math = 0;
    this["math"] = math || 0;
}

// 함수 생성자를 이용한 캡슐화의 해결책, prototype
Exam.prototype.total = function () {
    return this.kor + this.eng + this.math;
};

Exam.prototype.avg = function () {
    return this.total() / 3;
};

// 사용 방법: sayHello()
function sayHello() {
    return "hello";
}

const total = () => {
    return kor + eng + math;
};

const avg = () => {
    return total / 3;
};

// 인스턴스
let exam1 = new Exam(); // 생성자(constructor): 객체의 초기화를 담당하는 함수
// 실체
exam1.total();

let exam2 = new Exam(1, 1, 1);

// 함수 생성자를 이용한 캡슐화의 문제점
// 데이터는 개별화, 함수(연산)는 공유 가능
// 개별적으로 함수가 생성됨
console.log(exam1.total === exam2.total); // 함수의 참조가 같은 객체를 참조하는지 비교

// 공유해도 되는 것은 prototype으로 정의
Array.prototype.eng = 30;
let ar1 = [];
ar1.kor = 30;
let ar2 = [];

console.log(ar1.kor, ar2.kor);
console.log(ar1.eng, ar2.eng);
