// FUNCTIONS

getAdditivePersistence = function (num) {//num should be integer under 16 digits
    //I choose to parseInt to make num an integer if it is not
    num = parseInt(num);
    num = Math.abs(num); //removes negatives
    let count = 0;
    while (num > 9) { 
        str = num.toString();
        num = getSumOfStr(str);
        count++;
        if (count > 20) { //this should never happen
            console.log("took more than 20 iterations, ending early due to infinite loop");
            break;
        }
    }
    return count;
}
getSumOfStr = function (str) {
    let sum = 0;
    for (i = 0; i < str.length; i++) {
        let int = parseInt(str.charAt(i));
        sum = sum + int;
    }
    return sum;
}



testAdditive = function () {
    console.log(3.5, "Additive Persistence", getAdditivePersistence(3.5), 0); //0
    console.log(5, "Additive Persistence", getAdditivePersistence(5), 0); //0
    console.log(11, "Additive Persistence", getAdditivePersistence(11), 1); //1
    console.log(-11, "Additive Persistence", getAdditivePersistence(-11), 1); //1
    console.log(-4, "Additive Persistence", getAdditivePersistence(-4), 0); //0
    console.log(-10, "Additive Persistence", getAdditivePersistence(-10), 1); //1
    console.log(10, "Additive Persistence", getAdditivePersistence(10), 1); //1

    console.log(3, "Additive Persistence", getAdditivePersistence(1679583), 3); //3
    console.log(2, "Additive Persistence", getAdditivePersistence(123456), 2); //2

    console.log("big", "Additive Persistence", getAdditivePersistence(8888888888888888), "?"); //2
    //16th digit gets rounded and dropped... anything after 15 is a zero
}

//~~~~~~~~~~~~


getMultPersistence = function (num) {
    num = parseInt(num);
    num = Math.abs(num); //removes negatives
    let count = 0;

    while (num > 9) { 
        str = num.toString();
        num = getProductOfStr(str);
        count++;
        if (count > 20) { //this should never happen
            console.log("took more than 20 iterations, ending early due to infinite loop");
            break;
        }
    }
    return count;
}
getProductOfStr = function (str) {
    let product = 1;
    for (i = 0; i < str.length; i++) {
        let int = parseInt(str.charAt(i));
        product = product * int;

    }
    // console.log(product);
    return product;//temp
    //return a num
}

testMult = function (num) {
    console.log(9, "Mult Persistence", getMultPersistence(9), 0); //0
    console.log(-9, "Mult Persistence", getMultPersistence(-9), 0); //0
    console.log(100, "Mult Persistence", getMultPersistence(100), 1); //0
    console.log(1111, "Mult Persistence", getMultPersistence(1111), 1); //0
    console.log(123456, "Mult Persistence", getMultPersistence(123456), 2); //0
    console.log(77, "Mult Persistence", getMultPersistence(77), 4); //0
    console.log("big", "Mult Persistence", getMultPersistence(999999999), "?"); //0
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Main Code (testing)
testAdditive();
testMult();


