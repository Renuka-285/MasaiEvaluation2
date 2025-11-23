function sumAll(...nums) {
  return nums.reduce((acc, el) => acc + el, 0);
}

console.log(sumAll(1, 2, 3, 4)); 
