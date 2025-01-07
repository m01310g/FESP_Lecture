// let exams = []; // 성적 데이터

// export const getList = (page = 1, size = 3) => {
//     let exams1 = exams.sort((a, b) => b.kor - a.kor).slice(0, 3); // slice: 3개씩 끊음
//     return exams1;
// };

// export const size = () => exams.length;

// export const add = (exam) => {
//     exams.push(exam);
// };

/* 
    위의 코드를 이용해서 ExamService 캡슐 작성
    ExamService의 서비스 함수는 add, getList, size 총 3개
    내부적으로 사용하는 속성은 Exam 객체를 담을 수 있는 배열
    배열명은 exams
*/

export default class ExamService {
    #exams = [];

    constructor(exams = []) {
        this.#exams = exams;
    }

    add(exam) {
        this.#exams.push(exam);
    }

    getList(page = 1, size = 3) {
        let exams = this.#exams
            .sort((a, b) => b.total() - a.total())
            .slice(0, 3);
        return exams;
    }

    size() {
        return this.#exams.length;
    }

    get(index) {
        return this.#exams[index];
    }
}
