function generateVolumes(amountPages, amountToms){
    let arrayLenght = amountPages.length
    const chapter = []
    const pagesInEachChapter = []
    
    for (let i = amountToms; i > 0; i--) {
        if(i === amountToms){
            let q = Math.floor(arrayLenght/amountToms)
            arrayLenght-= q
            amountToms--
            chapter.push(q)
        }else{
            let q = Math.floor(arrayLenght/amountToms) + amountPages[arrayLenght-1]
            arrayLenght-= q
            amountToms--
            chapter.push(q)
        }
    }
    
    if((amountPages.length/amountToms) % 2 !== 0){
        for (let j = 0; j < chapter.length; j++) {
            let e = amountPages.splice(0,chapter[j]).reduce((sum , num) => sum + num)
            pagesInEachChapter.push(e)
        }
    }else{
        for (let j = 0; j < chapter.length; j++) {
            let e = amountPages.splice(1,chapter[j]).reduce((sum , num) => sum + num)
            pagesInEachChapter.push(e)
        }
    }
    console.log(Math.max(...pagesInEachChapter))
}
generateVolumes([1, 2, 1, 1], 3) // 2
generateVolumes([1, 2, 1], 2) // 3