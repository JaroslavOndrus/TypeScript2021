const heightOfStep = 0.3;
const lenghtOfStep = 0.2;
const heightOfTower = 25;

console.log(totalDistance(heightOfStep, lenghtOfStep, heightOfTower))


function totalDistance(heightOfStep, lenghtOfStep, heightOfTower){
            return(heightOfTower/heightOfStep)*(heightOfStep+lenghtOfStep);
}

//

/*t number1 = 3;
const number2 = 4;
const number3 = 3;

console.log(EqualityOfThreeValues(number1, number2, number3))

function EqualityOfThreeValues(number1, number2, number3){
            if(number1 == number2 && number2 == number3){
                        return 3;
            }
            else if(number1 == number2 || number1 == number3 || number2 == number3){
                        return 2;
            }
            else{
                        return 0;
            }
}

//

const tr1 = 3;
const tr2 = 4;
const tr3 = 5;

console.log(IsItATriangle(tr1, tr2, tr3));

function IsItATriangle(tr1, tr2, tr3){
            if((tr1*tr1)+(tr2*tr2)==(tr3*tr3)){
                        return true;
            }
            else{
                        return false;
            }
}

//

*/


