var nums = new Array(1, 2, 3, 4, 5);
console.log(nums);

// 항목 삭제
nums.splice(2, 1);  // 요소 한 개만 삭제
console.log(nums);

// 항목 추가
nums.splice(2, 0, new Array(1, 2, 3));
console.log(nums);