// Selector
const button = document.getElementById("checkBtn");

button.addEventListener("click", function() {

    // Variables
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    console.log("Raw Input Types:");
    console.log(typeof value1);
    console.log(typeof value2);

    // Convert to Numbers
    let num1 = Number(value1);
    let num2 = Number(value2);

    // Data Types Example
    let exampleString = "Hello";
    let exampleNumber = 100;
    let exampleBoolean = true;
    let exampleNull = null;
    let exampleUndefined;

    // Arithmetic Operators
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let modulus = num1 % num2;

    // Plus Operator Deep Dive
    let concatenation = value1 + value2;

    // Comparison Operators
    let looseEqual = num1 == num2;
    let strictEqual = num1 === num2;
    let notEqual = num1 != num2;
    let strictNotEqual = num1 !== num2;
    let greater = num1 > num2;
    let lessOrEqual = num1 <= num2;

    // Output
    document.getElementById("output").innerHTML = `
        <b>Arithmetic:</b><br>
        Addition: ${addition} <br>
        Subtraction: ${subtraction} <br>
        Multiplication: ${multiplication} <br>
        Division: ${division} <br>
        Modulus: ${modulus} <br><br>

        <b>Addition vs Concatenation:</b><br>
        Concatenation (String + String): ${concatenation} <br><br>

        <b>Comparisons:</b><br>
        == : ${looseEqual} <br>
        === : ${strictEqual} <br>
        != : ${notEqual} <br>
        !== : ${strictNotEqual} <br>
        > : ${greater} <br>
        <= : ${lessOrEqual} <br><br>

        <b>Type Checking:</b><br>
        typeof value1: ${typeof value1} <br>
        typeof exampleString: ${typeof exampleString} <br>
        typeof exampleNumber: ${typeof exampleNumber} <br>
        typeof exampleBoolean: ${typeof exampleBoolean} <br>
        typeof exampleNull: ${typeof exampleNull} <br>
        typeof exampleUndefined: ${typeof exampleUndefined}
    `;
});
