import readlineSync from "readline-sync";
import { getList, size, add } from "./exam-service.js";

export const printHeader = () => {
    console.log(
        `====================================
                성적관리 프로그램         
        ====================================`
    );
};

export const inputMenu = () => {
    console.clear();
    console.log("------------------------------------");
    console.log("                메뉴선택             ");
    console.log("------------------------------------");

    console.log("1. 성적입력");
    console.log("2. 성적출력");
    console.log("3. 종료");
    console.log(">");
    let menu = readlineSync.question("");
    menu = parseInt(menu);
    return menu;
};

export const inputScore = () => {
    console.clear();
    console.log("------------------------------------");
    console.log("                성적입력             ");
    console.log("------------------------------------");

    let kor = readlineSync.question("kor: ");
    kor = parseInt(kor);
    let eng = readlineSync.question("eng: ");
    eng = parseInt(eng);
    let math = readlineSync.question("math: ");
    math = parseInt(math);

    // exams.push({ kor, eng, math });
    add({ kor, eng, math });
};

export const printScore = () => {
    console.clear();

    console.log("------------------------------------");
    console.log("                성적출력             ");
    console.log("------------------------------------");
    console.log(`총인원: ${size()}명`);
    console.log("");

    // 평균을 기준으로 역순 정렬(데이터 연산)
    let exams1 = getList(1, 3); // page, size

    for (let i = 0; i < exams1.length; i++) {
        let { kor, eng, math } = exams1[i]; // destructuring

        console.log(`num: ${i + 1}`);
        console.log(`kor: ${kor}`);
        console.log(`eng: ${eng}`);
        console.log(`math: ${math}`);
        console.log(`total: ${total()}`);
        console.log(`avg: ${avg()}`);
        console.log("--------------------------");
    }

    console.log("계속하려면 엔터키를 누르세요.");
    readlineSync.question("");
};

export const printFooter = () => {
    console.log("====================================");
    console.log("Bye~~~");
};
