let exams = []; // 성적 데이터

export const getList = (page = 1, size = 3) => {
    let exams1 = exams.sort((a, b) => b.kor - a.kor).slice(0, 3); // slice: 3개씩 끊음
    return exams1;
};

export const size = () => exams.length;

export const add = (exam) => {
    exams.push(exam);
};
