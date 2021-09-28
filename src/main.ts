const numberOfSlices = 24;
const numberOfRecipients = 12;
const slicesForEachOne = 2;

console.log(EqualSlices(numberOfSlices, numberOfRecipients, slicesForEachOne))

function EqualSlices(numberOfSlices, numberOfRecipients, slicesForEachOne){
    
    if((numberOfRecipients*slicesForEachOne)>numberOfSlices){
        return false;
    }
    else{
        return true;
    }
}