'use strict';
// const calAverage=(dolphinsScore1,dolphinsScore2,dolphinsScore3,koalasScore1,koalasScore2,koalasScore3)=>{
//     const averageDolphins=(dolphinsScore1+dolphinsScore2+dolphinsScore3)/3;
//     const averageKoalas=(koalasScore1+koalasScore2+koalasScore3)/3;
//   return `${averageDolphins} ${averageKoalas}`;
// }
const calAverage=(a,b,c)=>(a+b+c)/3;
const averageDolphins=calAverage(244,23,71);
const averageKoalas=calAverage(65,54,49);
console.log(averageDolphins,averageKoalas);
const checkWinner=function (avgDolphins,avgKoalas) {
    if(avgDolphins>avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
        return averageDolphins;
    }
    else if(avgDolphins*2<avgKoalas){
        console.log(`Koalas win (${avgKoalas} vd ${avgKoalas})`);
        return averageKoalas;
    }
    else{
        console.log("no team wins")
    }
}

const scores=calAverage(10,20,30);
console.log(scores);
checkWinner(averageDolphins,averageKoalas);
// const fruitCatter=function(fruits) {
//     return fruits*4;
// }
// const fruitprocessor=function(apples,oranges) {
//     const fruitvar=fruitCatter(apples);

// return `${fruitvar} apples and ${oranges} oranges`;
// }

// console.log(fruitprocessor(4,10));