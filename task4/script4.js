'use strict';

function genMagicSquare(n) {

    if(n === 2){
        console.log('Impossible')
    } else {
        if(n === 1 || n === 3){
            findMagicSquareThree(n)
        }
    }
}

function findMagicSquareThree(n){
    const answer = Array.from(Array(n+1), () => Array(n+1).fill(0))
    let x = Math.floor(n/2)+1
    let y = 1;
    
    for(let i=1; i <= n*n; i++ ) {
        answer[y][x] = i;
        if(i % 3 == 0) { 
            y ++; 
        } else {
            y-- 
            x++
            if(y < 1) {
                y = n
            }  
            if(x > n) {
                x = 1
            }  
        }
    } 
    
    for(let i = 1; i <= n;i++){
        console.log(answer[answer.length - i].splice(1,answer.length))
    }    
}

genMagicSquare(3)