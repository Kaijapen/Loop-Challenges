function odds(){
    console.log("odd #s from 1-20...");
    for (var i = 1; i < 20; i++){
        if (i % 2 == 1){
            console.log(i);
        }
    }
}

function decrthree(){
    console.log("Showing numbers evenly divisible by 3 (100-3)...");
    for( var i = 100; i > 2; i--){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}

function printArr(arr){
    console.log("Printing the array...");
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function sigma(){
    console.log("Sum of #s from 1 - 100...");
    var sum = 0;
    for (var i = 1; i < 101; i++){
        sum += i;
    }
    console.log(sum);
}

function factorial() {
    console.log("Factorial of #s from 1 to 12...")
    var product = 1;
    for (var i = 1; i < 13; i++){
        product = product * i;
    }
    console.log(product);
}

odds()
decrthree();
printArr([4, 2.5, 1, -0.5, -2, -3.5]);
sigma();
factorial();
