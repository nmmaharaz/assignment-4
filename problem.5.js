// const values = [10, 20, 70];
// let sum = 0;
// for(const number of values){
//       sum = sum + number
      
// }
// console.log(sum)
// const averageTwo = Math.round(sum / values.length)
// console.log(averageTwo)

function waitingTime(x, y){
      if(!Array.isArray(x) || typeof y !== "number"){
            return "Invalid Input"
      }
      let sum = 0;
      for(const number of x){
            sum = sum + number
      }
      let average  = Math.round(sum / x.length)
      let serialDistance = serialNumber - x.length-1;
      let totalWaitingTime = serialDistance * average
      return totalWaitingTime;
}

let array = [7,8,3,4,5];
let  serialNumber = 9;
let result = waitingTime(array, serialNumber)
console.log(result)