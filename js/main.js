// decleration and definition
let var1 = "";
let var2 = "";
let op1 = "";

function getNum(Number) {
    if (Number === '.') {
        if (var1.includes('.')) {
            return;
        }
        else {
            var1 += Number;
            console.log(var1);
        }
    }
    else {
        var1 += Number;
        console.log(var1);
    }
    result = "";

    printScreen(var1, op1, var2, result);
}

function getOpr(Operator) {
    // If operator is added for no variable
    if (var1 === "" || var2 !== "") {
        console.log("error");
        var1 = "";
        var2 = "";
        op1 = "";
        result = "error"
    }
    // If only one variable is present
    // (Possible only for first operator)
    else {
        var2 = var1;
        var1 = "";
        op1 = Operator;
        result = "";
    }
    console.log(var2, op1);


    printScreen(var1, op1, var2, result);
}

function clrScr() {
    var1 = "";
    var2 = "";
    op1 = "";
    result = "";
    printScreen(var1, op1, var2, result);
    console.clear();
}

function solve() {
    if (var1 !== "" && var2 !== "" && op1 !== "") {
        let num1 = parseFloat(var2);
        let num2 = parseFloat(var1);
        let result = 0;

        switch (op1) {
            case "+":
                result = num1 + num2;
                break;

            case "-":
                result = num1 - num2;
                break;

            case "x":
                result = num1 * num2;
                break;

            case "/":
                if (num2 === 0) {
                    result = "error";
                }
                else {
                    result = num1 / num2;
                }
                break;

            case "%":
                if (num2 === 0) {
                    result = "error";
                }
                else {
                    result = num1 % num2;
                }
                break;

            default:
                break;
        }
        printScreen(var1, op1, var2, result);
        var2 = result;        
        var1 = "";
        op1 = "";
        console.log(result);
        
    }


}

function printScreen(var1, op1, var2, result) {
    const printDiv = document.getElementById("text1");
    printDiv.innerHTML = var1;

    const text2 = document.getElementById("text2");
    text2.innerHTML = op1;
    const text3 = document.getElementById("text3");
    text3.innerHTML = var2;
    const text4 = document.getElementById("text4");
    text4.innerHTML = result;
    // string = (op1.toString);
    // document.getElementById("text2").value = string;
    // string = (var2.toString);
    // document.getElementById("text3").value = string;
    // string = (result.toString);
    // document.getElementById("text4").value = string;
}