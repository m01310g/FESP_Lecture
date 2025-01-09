let nums = [1, 32, 23, 14, 5];

// Loop over: 배열 전체 조회
for (const num of nums) {
    console.log(num);
}

// Find: 조건에 맞는 첫번째 요소 조회(검색)
let result1 = nums.find(num => num > 20);

console.log('--- find ---');
console.log(result1);

// Filter: 조건에 맞는 전체 요소 조회
let result2 = nums.filter(num => num > 20);

console.log('--- filter ---');
for (const num of result2) {
    console.log(num);
}

// Map: 값을 다른 형태로 변환
let result3 = nums.map(num => num * 2);

console.log('--- map ---');
for (const num of result3) {
    console.log(num);
}

// Reduce: 집계 메서드
let sum = result3.reduce((acc, num) => acc + num, 0);

console.log('--- reduce ---');
console.log(sum);


// 20보다 작은 값들을 찾아서 2배로 만든 후 결과의 합 구하기
let array = [1, 32, 23, 14, 5, 100, 80];

const result4 = array.filter(num => num < 20)
                    .map(num => num * 2)
                    .reduce((acc, num) => acc + num, 0);

console.log('--------------');
console.log(result4);

// function
// let add = new Function('a', 'b', 'return a + b');
// js에서는 매개변수 불필요, 실제로는 argumnets collection이 받음
let add = function () { // 매개변수가 아니라 별칭을 정하는 역할
    return arguments[0] + arguments[1];
}

console.log('add call', add(10, 20));