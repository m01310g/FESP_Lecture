import ILens from "./src/interface/ILens";
import Lens from "./src/interface/Lens";

{
    // let menuService: AA = new AA();
    let lens: ILens = new Lens();
    lens.zoomIn(1); // class에서 interface를 implement 해야 사용 가능
    lens.zoomOut(1);
}

{
    enum Direction {
        Up,
        Down,
        Right,
        Left,
    }

    console.log(Direction.Up);
}

{
    // Literal types
    let x: "hello" = "hello";
    x = "hello"; // 가능
    // x = "howdy"; // error
    let level: 1 | 2 | 3 | 4;
    level = 3;
    console.log(level);
    // level = 6; // error
}

{
    // Union types
    type ID = number | undefined;

    const value: ID = 1234;
    console.log(value); // 가능

    // const username: ID = "newlec";
    // console.log(username); // error
}

{
    // Special types
    let msg: unknown = "hello";
    // msg.toUpperCase(); // type이 맞지 않음
    // 조건 검사
    if (typeof msg === "string") {
        console.log(msg.toUpperCase());
    }
}

{
    // Primitive types
    // let user: { name: string; age: number; }; // 형식 지정
    let user: { name: string; age: number };
    user = { name: "Jack", age: 32 };
    console.log(user);
}

{
    let nums: number[] = [1, 2, 3, 4, 5];
    // nums.push("hello");  // 형식을 명시적으로 지정했기 때문에 넣을 수 없음
    console.log(nums);
    nums.push(6);
    console.log(nums);
}

{
    // console.log("Hello World!");
    // function greet(person: string, date: ) {
    //     console.log(`Hello ${person}, today is ${date}`);
    // }
    // greet("Brendan", new Date());
}
