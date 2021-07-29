console.log(copy(5, 1, 2))
console.log(copy(4, 1, 1))

function copy (amountCopies, speedFirstCopier, speedSecondCopier){
  if(amountCopies==1){
    return Math.min(speedFirstCopier,speedSecondCopier)
  }

  if(speedFirstCopier===speedSecondCopier){
    if (amountCopies % 2 === 0) {
      return Math.ceil((Math.ceil((amountCopies+1)/2))*speedFirstCopier)
    }
    if (amountCopies % 2 !== 0){
      return Math.ceil(((amountCopies+1)/2)*speedFirstCopier)
    }
  }

  if (speedFirstCopier < speedSecondCopier) {
    if(amountCopies % 2 !== 0){
      return (Math.ceil(((amountCopies+1)/2)+(speedFirstCopier/2))*speedFirstCopier)
    }
    if(amountCopies % 2 === 0){
      return (Math.ceil((Math.floor((amountCopies+1)/2))+(speedFirstCopier/2))*speedFirstCopier)
    }
  }

  if (speedFirstCopier > speedSecondCopier) {
    if(amountCopies % 2 !== 0){
      return (Math.ceil(((amountCopies+1)/2)+(speedSecondCopier/2))*speedSecondCopier)
    }
    if(amountCopies % 2 === 0){
      return (Math.ceil((Math.floor((amountCopies+1)/2))+(speedSecondCopier/2))*speedSecondCopier)
    }
  }

}