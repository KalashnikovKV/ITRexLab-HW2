/*
let amountInvK = document.querySelector(".inputAmountInvK")
let valueLamp = document.querySelector(".inputValueLamp")
let valueInvP = document.querySelector(".inputValueInvP")

let getInput = document.querySelector(".getInput")

valueInvP.addEventListener('input', () =>{
    checkedNumber(valueInvP.value)
})

getInput.addEventListener('click', () =>{
    console.log(`${amountInvK.value}`)
    console.log(`${valueLamp.value}`)
    console.log(`${valueInvP.value}`)
})

function checkedNumber (num) {
    if (!isNaN(num)===true) {
        console.log("Введено число")
        return num
    } else {
        console.log(`Введите число`)
        return false
    }
}
*/
bulbs(20, [2,3,8]) 

function bulbs(amountBulbs, arrayP) {
  const bulbsArray = new Array(amountBulbs);
  bulbsArray.fill(1);
  arrayP.forEach(element => inversion(element));
  const result = bulbsArray.filter(element => element % 2 == 0).length
  console.log(result);
  function inversion (element){
    for (let i = 1; i < bulbsArray.length+1; i++) {
      if (i % element == 0) {
        bulbsArray[i-1] += 1;
      }
    }
  }
}