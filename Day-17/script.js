
// TASK ARRAY
const tasks =
[
{ name: "Design UI", status: "Completed" },
{ name: "Fix Bugs", status: "Pending" },
{ name: "Write Code", status: "Completed" },
{ name: "Test Project", status: "Pending" }
];


// FILTER METHOD
function showTasks()
{

const completedTasks = tasks.filter(task => task.status === "Completed");

const pendingTasks = tasks.filter(task => task.status === "Pending");


document.getElementById("completed").innerHTML = "";

completedTasks.forEach(task =>
{
document.getElementById("completed").innerHTML += `<li>${task.name}</li>`;
});


document.getElementById("pending").innerHTML = "";

pendingTasks.forEach(task =>
{
document.getElementById("pending").innerHTML += `<li>${task.name}</li>`;
});

}




// MAP METHOD
const prices = [100, 200, 300, 400];


function calculateTax()
{

const taxPrices = prices.map(price => price + price * 0.18);


document.getElementById("prices").innerHTML = "";

taxPrices.forEach(price =>
{
document.getElementById("prices").innerHTML += `<li>${price}</li>`;
});

}




// REDUCE METHOD
const expenses = [5000, 3000, 4000, 2000];


function totalBudget()
{

const total = expenses.reduce((sum, expense) => sum + expense, 0);


document.getElementById("budget").innerText =
"Total Budget = ₹ " + total;

}
