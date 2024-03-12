// let result = ""
// let variable = ""
// let op = ""

// function getNum(Number) {
//     if (Number === '.') {
//         if (result.includes('.')) {
//             return;
//         }
//         else{
//             result += Number;
//             console.log(result);
//         }
//     }
//     else {
//         result += Number;
//         console.log(result);
//     }
//     printScreen();
// }    
    
// function getOpr(Operator){
//     // If operator is added for no variable
//     if(result === "" || variable !== "" ){
//         console.log("error");
//         result = "";
//         varable = "";
//         op1 = "";
//     }
//     // If only one variable is present
//     // (Possible only for first operator)
//     else{
//         var2 = var1;
//         var1 = "";
//         op1 = Operator;
//         result = "";
//     }
//     console.log(var2, op1);
    
    
//     printScreen();
// }

// function clrScr(){
//     var1 = "";
//     var2 = "";
//     op1 = "";
//     document.getElementById("text1").innerHTML = " ";
//     console.clear();
// }

// function solve() {
//     if(var1 !== "" && var2 !== "" && op1 !=="" ){
//         let num1 = parseFloat(var2);
//         let num2 = parseFloat(var1);
//         let result = 0;
        
//         switch (op1) {
//             case "+":
//                 result = num1 + num2;
//                 break;
                
//             case "-":
//                 result = num1 - num2;
//                 break;
            
//             case "x":
//                 result = num1 * num2;
//                 break;
                
//             case "/":
//                 if (num2 === 0) {
//                     result = "error";
//                 }
//                 else{
//                     result = num1 / num2;
//                 }
//                 break;
            
//             case "%":
//                 if (num2 === 0) {
//                     result = "error";
//                 }
//                 else{
//                     result = num1 % num2;
//                 }
//                 break;
        
//             default:
//                 break;
//         }
//         var2 = result;
//         var1 = "";
//         op1 = "";
//         console.log(result);
//         printScreen();
//     }
// }

// function printScreen() {
//     string = result.toString();
//     document.getElementById("result").value = result;
// }
