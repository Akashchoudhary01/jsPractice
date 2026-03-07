//use Rest parameter to accept any num of score and return total score

function getScore(...score){
    let total = 0;
    score.forEach(function(val){
        total = total + val;
    })
    return total;
    
}

console.log(getScore(22 , 33 , 44 , 55 , 22 , 44));