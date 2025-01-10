{
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Right"] = 2] = "Right";
        Direction[Direction["Left"] = 3] = "Left";
    })(Direction || (Direction = {}));
    console.log(Direction.Up);
}
{
    // Literal types
    var x = "hello";
    x = "hello"; // 가능
    // x = "howdy"; // error
    var level = void 0;
    level = 3;
    console.log(level);
    // level = 6; // error
}
{
    var value = 1234;
    console.log(value); // 가능
    // const username: ID = "newlec";
    // console.log(username); // error
}
{
    // Special types
    var msg = "hello";
    // msg.toUpperCase(); // type이 맞지 않음
    // 조건 검사
    if (typeof msg === "string") {
        console.log(msg.toUpperCase());
    }
}
{
    // Primitive types
    // let user: { name: string; age: number; }; // 형식 지정
    var user = void 0;
    user = { name: "Jack", age: 32 };
    console.log(user);
}
{
    var nums = [1, 2, 3, 4, 5];
    // nums.push("hello");  // 형식을 명시적으로 지정했기 때문에 넣을 수 없음
    console.log(nums);
    nums.push(6);
    console.log(nums);
}
{
    console.log("Hello World!");
    function greet(person, date) {
        console.log("Hello ".concat(person, ", today is ").concat(date));
    }
    greet("Brendan", new Date());
}
