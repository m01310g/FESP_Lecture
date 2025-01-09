{
    // 문자열(기본 자료형)
    let x = "hello";
    // 객체
    let y = new String("hello");
    // 기본 자료형과 객체의 비교이기 때문에 false 출력
    console.log(x === y);
}

{
    var json = '{"kor": 30, "eng": 40, "math": 50}';
    var exam = JSON.parse(json);

    console.log(exam.kor, exam.eng, exam.math);
}