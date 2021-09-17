function inc(){
    let start = 0;
    return function(num){
     start = num +=start
        console.log('sum = ',start);
    }
}


let sum = inc();
sum(3) 
sum(5)
sum(228) 