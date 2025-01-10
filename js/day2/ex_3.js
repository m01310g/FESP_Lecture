{
    let f3;
    let x = 100;
    // f1의 함수 실행이 종료되면 x와 f3은 전역 변수이기 때문에 메모리 할당이 종료
    let f1 = function () {
        x = 40;
        f3 = function () {
            console.log(x);
        }
    }

    f1();
    f3();
}

{
    // Number(10)이라는 객체를 변수 x, y가 참조
    let x = new Number(10);
    let y = x;
    // 변수 x가 Number(20)이라는 객체를 참조하도록 변경
    x = new Number(20);
    // 변수 y가 Number(30)이라는 객체를 참조하도록 변경
    y = new Number(30);
    // Number(10)이라는 객체가 garbage가 됨 -> 메모리에서 수거
}

{
    var x = 20;

    console.log(x);
    console.log(window.x);
    // console.log(global.x);
}

{
    var gx = 1;
    gy = 2;
    function test() {
        var x = 20;
        y = 30; // 묵시적으로 global 객체로 선언
        console.log(x, y, gx, gy);
        console.log(window.x, window.y, window.gx, window.gy);
        console.log(global.x, global.y, global.gx, global.gy);
    }

    test();
}

{
    var funcs = [];

    for (var i = 0; i < 3; i++) {
        funcs[i] = function () {
            console.log(i);
        };
        funcs[i]();
    }

    funcs[0]();
    funcs[1]();
    funcs[2]();
}