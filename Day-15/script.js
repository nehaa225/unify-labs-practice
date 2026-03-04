// ===============================
// STEP 1: BOOT SEQUENCE
// ===============================

function bootSystem() {

    let masterPIN = "9999";
    let attempts = 3;
    let accessGranted = false;

    while (attempts > 0) {
        let input = prompt("ENTER MASTER PIN:");

        if (input === masterPIN) {
            accessGranted = true;
            break;
        } else {
            attempts--;
            alert("ACCESS DENIED! Attempts left: " + attempts);
        }
    }

    if (!accessGranted) {
        alert("!!! SYSTEM SELF-DESTRUCT INITIATED !!!");
        return;
    }

    let banner = "";
    banner += "================================\n";
    banner += "  Welcome to Virtual Core v1.0  \n";
    banner += "================================\n";

    alert(banner);

    commandKernel();
}

// ===============================
// STEP 2: COMMAND KERNEL
// ===============================

let balance = 1000;

function commandKernel() {

    while (true) {
        let command = prompt("[V-CORE]> Type command: (bank, shop, vault, exit)");

        switch (command) {

            case "bank":
                bankingKernel();
                break;

            case "shop":
                smartShop();
                break;

            case "vault":
                secureVault();
                break;

            case "exit":
                alert("Shutting down Virtual Core...");
                return;

            default:
                alert("UNKNOWN COMMAND");
        }
    }
}

// ===============================
// STEP 3: BANKING KERNEL
// ===============================

function bankingKernel() {

    while (true) {
        let action = prompt("Bank Commands: (deposit, withdraw, balance, back)");

        switch (action) {

            case "deposit":
                let depositAmount = parseFloat(prompt("Enter deposit amount:"));
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    balance += depositAmount;
                    alert("Deposit successful! New Balance: $" + balance.toFixed(2));
                } else {
                    alert("INVALID AMOUNT");
                }
                break;

            case "withdraw":
                let withdrawAmount = parseFloat(prompt("Enter withdraw amount:"));
                if (withdrawAmount > balance) {
                    alert("INSUFFICIENT FUNDS");
                } else if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                    balance -= withdrawAmount;
                    alert("Withdraw successful! New Balance: $" + balance.toFixed(2));
                } else {
                    alert("INVALID AMOUNT");
                }
                break;

            case "balance":
                alert("Current Balance: $" + balance.toFixed(2));
                break;

            case "back":
                return;

            default:
                alert("INVALID BANK COMMAND");
        }
    }
}

// ===============================
// STEP 4: SMART SHOP
// ===============================

function smartShop() {

    const UNIT_PRICE = 50;
    let quantity = parseInt(prompt("Enter quantity of items:"));

    if (isNaN(quantity) || quantity <= 0) {
        alert("INVALID QUANTITY");
        return;
    }

    let discount = 0;

    if (quantity >= 6 && quantity <= 10) {
        discount = 0.10;
    } else if (quantity >= 11) {
        discount = 0.20;
    }

    let total = quantity * UNIT_PRICE;
    let finalPrice = total - (total * discount);

    if (finalPrice > balance) {
        alert("INSUFFICIENT FUNDS IN BANK");
        return;
    }

    balance -= finalPrice;

    alert(
        "Items: " + quantity +
        "\nDiscount: " + (discount * 100) + "%" +
        "\nFinal Price: $" + finalPrice.toFixed(2) +
        "\nRemaining Balance: $" + balance.toFixed(2)
    );
}

// ===============================
// STEP 5: SECURE VAULT
// ===============================

function secureVault() {

    let secretWord = "matrix";
    alert("Hint: The simulated reality movie (1999)");

    let guess = prompt("Enter the secret word:");

    if (guess === secretWord) {
        alert("ACCESS GRANTED!\nSecret Message: The cake is a lie.");
    } else {
        alert("ACCESS DENIED! Returning to Main Menu...");
    }
}