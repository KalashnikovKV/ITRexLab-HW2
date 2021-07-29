
findKayakAmount([50, 120, 74, 60, 100, 82], 135)

function findKayakAmount(arrayPeopleWeights, capacityKayak){
  const answer = []
  arrayPeopleWeights.sort((a, b) => a - b)
  for (let i = 0; i < arrayPeopleWeights.length; i++) {
    if (((arrayPeopleWeights[i])+(arrayPeopleWeights[i+1])) >= capacityKayak) {
      answer.unshift(1)
    }else{
      if((arrayPeopleWeights[i])+(arrayPeopleWeights[i-1]) <= capacityKayak)
      answer.push(2)
    }
  }
  console.log(answer.length)
}