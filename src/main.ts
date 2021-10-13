function CanCaptureTheRook(rook1, rook2){
    if(rook1[0] == rook2[0] || rook1[1] == rook2[1]){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

console.log(CanCaptureTheRook("F8", "C8"));