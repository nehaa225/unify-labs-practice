function startApp() {

    // Lesson 5: prompt & alert
    let name = prompt("Enter your name:");
    alert("Welcome " + name + "!");

    // Lesson 9: String to Number conversion
    let age = Number(prompt("Enter your age:"));

    let output = document.getElementById("output");

    // Lesson 1 + 2: Logical operators + if statement
    if (age >= 18 && age <= 60) {
        output.innerHTML = "You are eligible to work.<br>";
    } 
    else if (age > 60) {
        output.innerHTML = "You are a senior citizen.<br>";
    } 
    else {
        output.innerHTML = "You are a minor.<br>";
    }

    // Lesson 4: Ternary operator
    let status = (age >= 18) ? "Adult" : "Not Adult";
    output.innerHTML += "Status: " + status + "<br>";

    // Lesson 3: Switch statement
    let day = prompt("Enter a number (1-3) for day:");
    day = parseInt(day);

    switch(day) {
        case 1:
            output.innerHTML += "Today is Monday<br>";
            break;
        case 2:
            output.innerHTML += "Today is Tuesday<br>";
            break;
        case 3:
            output.innerHTML += "Today is Wednesday<br>";
            break;
        default:
            output.innerHTML += "Invalid Day<br>";
    }

    // Lesson 6: For loop
    output.innerHTML += "<br>For Loop Example:<br>";
    for (let i = 1; i <= 5; i++) {
        output.innerHTML += "Number: " + i + "<br>";
    }

    // Lesson 7: While loop
    output.innerHTML += "<br>While Loop Example:<br>";
    let count = 1;
    while (count <= 3) {
        output.innerHTML += "Count: " + count + "<br>";
        count++;
    }

    // Lesson 8: Nested loop (pattern)
    output.innerHTML += "<br>Nested Loop Pattern:<br>";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            output.innerHTML += "* ";
        }
        output.innerHTML += "<br>";
    }

    // Lesson 5: confirm
    let again = confirm("Do you want to restart?");
    if (again) {
        startApp();
    } else {
        alert("Thank you!");
    }
}
