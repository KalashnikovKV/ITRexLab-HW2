let amountCopies = 5
let speedFirstCopier = 1
let speedSecondCopier = 2

function copy (amountCopies, speedFirstCopier, speedSecondCopier){
  if(amountCopies==1){
    return Math.min(speedFirstCopier,speedSecondCopier)
  }

  if(speedFirstCopier===speedSecondCopier){
    if (amountCopies % 2 === 0) {
      return (amountCopies/2)*speedFirstCopier
    }else {
      return Math.ceil(amountCopies/2)*speedFirstCopier
    }
  }

  if(speedFirstCopier > speedSecondCopier || speedSecondCopier > speedFirstCopier){
    return (Math.ceil(amountCopies/(speedFirstCopier+speedSecondCopier))*2)
  }
}
console.log(copy(amountCopies, speedFirstCopier, speedSecondCopier))