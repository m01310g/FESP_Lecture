{
    var nums = [4, 1, 10, 8, 7, 2, 5, 6, 9, 3];
    console.log(nums);

    // sort 메소드는 유니코드 기준으로 정렬(문자열로 비교)
    // 조건: 음수 전달 시 내림차순, 양수 전달 시 오름차순
    // nums.sort(function (a, b) {
    //     return b - a;
    // });
    nums.sort((a, b) => a - b);
    console.log(nums);
}

{
    let exam = {
        kor: 10,
        eng: 20,
        math: 30,
        student: {
            name: "newlec",
            phone: "010-1234-5678"
        }
    };

    let { student: { name, phone } } = exam;
    console.log(name, phone);
    console.log(exam.kor);
}

{
    let notice = {
		title: "공지사항",
		files: ["img1.png", "img2.png"]
    };

    let { files: [first] } = notice;
    console.log(first);
}