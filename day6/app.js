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
