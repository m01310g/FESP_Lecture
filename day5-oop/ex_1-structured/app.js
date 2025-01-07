// 외부라이브러리 : npm install readline-sync
// 절차적인 프로그래밍

/*
    1. 코드가 커지는 문제: 함수로 분리
    2. 변수의 스코프가 너무 넓은 문제: 지역화
    3. 데이터를 표현하지 않고 있음: 데이터(성적)의 구조화
    4. 코드 중복: 집중화
*/

import {
    printHeader,
    inputMenu,
    inputScore,
    printScore,
    printFooter,
} from "./lib.js";

let isRun = true;

printHeader();

while (isRun) {
    let menu = inputMenu();

    switch (menu) {
        case 1:
            inputScore();
            break;
        case 2:
            printScore();
            break;
        case 3:
            isRun = false;
            break;
    }
}

printFooter();

// ⬆️ Top(거시적 코드)
// -----------------
// ⬇️ Down(미시적 코드)

// const printHeader = () => {
//     console.log(
//         `====================================
//                 성적관리 프로그램
//         ====================================`
//     );
// };

// const inputScore = () => {
//     console.clear();
//     console.log("------------------------------------");
//     console.log("                성적입력             ");
//     console.log("------------------------------------");

//     let kor = readlineSync.question("kor: ");
//     kor = parseInt(kor);
//     let eng = readlineSync.question("eng: ");
//     eng = parseInt(eng);
//     let math = readlineSync.question("math: ");
//     math = parseInt(math);

//     kors.push(kor);
//     engs.push(eng);
//     maths.push(math);
// };

// const printScore = () => {
//     console.clear();

//     console.log("------------------------------------");
//     console.log("                성적출력             ");
//     console.log("------------------------------------");
//     console.log(`총인원: ${kors.length}명`);
//     console.log("");

//     // 평균을 기준으로 역순정렬
//     // ??

//     for (let i = 0; i < kors.length; i++) {
//         let kor = kors[i];
//         let eng = engs[i];
//         let math = maths[i];

//         // 총점 계산
//         let total = kor + eng + math;
//         // 평균 계산
//         let avg = total / 3;

//         console.log(`num: ${i + 1}`);
//         console.log(`kor: ${kor}`);
//         console.log(`eng: ${eng}`);
//         console.log(`math: ${math}`);
//         console.log(`total: ${total}`);
//         console.log(`avg: ${avg}`);
//         console.log("--------------------------");
//     }

//     console.log("계속하려면 엔터키를 누르세요.");
//     readlineSync.question("");
// };

// const printFooter = () => {
//     console.log("====================================");
//     console.log("Bye~~~");
// };
