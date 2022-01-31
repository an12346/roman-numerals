const setI = (i) => {
  return romanNumerals = (num) => {
    let output = [];
    const arr = [1000, 500, 100, 50, 10, 5, 1];
    const letters=['M','D','C','L','X','V','I'];
    if (num === 0) {
      return output.join("");
    } else if (num >= arr[i]) {
      output.push(letters[i]);
      return romanNumerals(num - arr[i])
    // } else if (num >= 500) {
    //   console.log("D");
    //   return romanNumerals(num - 500, arr)
    // } else if (num >= 100) {
    //   console.log("C");
    //   return romanNumerals(num - 100, arr)
    // } else if (num >= 50) {
    //   console.log("L");
    //   return romanNumerals(num - 50, arr)
    // } else if (num >= 10) {
    //   console.log("X");
    //   return romanNumerals(num - 10, arr)
    // } else if (num >= 5) {
    //   console.log("V");
    //   return romanNumerals(num - 5, arr)
    // } else if (num >= 1) {
    //   console.log("I");
    //   return romanNumerals(num - 1, arr)
    } else {
      i = i+1;
      return romanNumerals(num)
    }
  }
}
const setIToZero = setI(0);
console.log(setIToZero(1050));



// const countDown = (10) => {
//   if (num === 0) {
//     return num;
//   } else {
//     console.log(10);
//     return countDown(10 - 1);
        // else {
        //   console.log(9);
        //   return countDown(9 - 1)
        // }
//   }
// };

// console.log(countDown(10));