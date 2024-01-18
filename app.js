let nums = [4567, 222, 1098, 3455, 7823, 2222, 1090];

console.log(nums);

console.log("Жолдору");

let result2 = nums
  .filter((num) => num % 2 === 0)
  .map((num, index) => num * index);

console.log("1-Жолу:", result2);


let totalNumss=result2.reduce((total, numbers)=>total+numbers,0)
console.log("Резултат",totalNumss);

let result = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    result.push(nums[i] * i);
  }
}

console.log("2-Жолу:",result);


let totalNums=result.reduce((total, numbers)=>total+numbers,0)
console.log("Резултат",totalNums);