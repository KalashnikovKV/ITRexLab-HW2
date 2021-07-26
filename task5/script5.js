let arrayPeopleWeights = [50, 120, 74, 60, 100, 82]
let capacityKayak = 135
let answer = []
arrayPeopleWeights.sort(compareNumbers)
findKayakAmount(arrayPeopleWeights, capacityKayak)

function findKayakAmount(arrayPeopleWeights, capacityKayak){
  for (let i = 0; i < arrayPeopleWeights.length; i++) {
    if (((arrayPeopleWeights[i])+(arrayPeopleWeights[i+1])) >= capacityKayak) {
      answer.unshift(1)
    }else{
      if((arrayPeopleWeights[i])+(arrayPeopleWeights[i-1]) <= capacityKayak)
      answer.push(2)
    }
  } 
  console.log(arrayPeopleWeights)
  console.log(answer)
  console.log(answer.length)
}

function compareNumbers(a, b) {
  return a - b;
}
