const currentBalanceNumber = document.getElementById("currentBalanceNumber");
const addIncome = document.getElementById("addIncome");
const addExpense = document.getElementById("addExpense");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const transactionList = document.getElementById("transactionList");
const balanceAmount = document.getElementById("balanceAmount");
const updateBalance = document.getElementById("updateBalance");
const updateBalanceGroup = document.getElementById("updateBalanceGroup");
let currentBalance = 0;
const listArray = [];


function displayIncome() {

    transactionList.innerHTML = "";
    listArray.forEach(transaction => {
        const li = document.createElement("li");
        li.textContent = ` + $${transaction.amount} - ${transaction.description} - ${transaction.category}`;
        transactionList.appendChild(li); 
    });
    
}


function displayExpenses() {

    transactionList.innerHTML = "";
    listArray.forEach(transaction => {
        const li = document.createElement("li");
        li.textContent = ` - $${transaction.amount} - ${transaction.description} - ${transaction.category}`;
        transactionList.appendChild(li); 
    });
    
}
 
updateBalance.addEventListener("click", function (d) {
    d.preventDefault();
    const balanceAmountValue = Number(balanceAmount.value);
    currentBalance = balanceAmountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;
    updateBalanceGroup.style.display = "none";
})

addIncome.addEventListener("click", function (e) {
    e.preventDefault();
    const amountValue = Number(amount.value);
    const descriptionValue = description.value;
    const categoryValue = category.value;

    currentBalance += amountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;

    const transaction = {
        type: "income",
        amount: amountValue,
        description: descriptionValue,
        category: categoryValue
    }

    listArray.push(transaction);
    displayIncome();
})

addExpense.addEventListener("click", function (f) {
    f.preventDefault();
    const amountValue = Number(amount.value);
    const descriptionValue = description.value;
    const categoryValue = category.value;

    currentBalance -= amountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;

    const transaction = {
        type: "expense",
        amount: amountValue,
        description: descriptionValue,
        category: categoryValue
    }

    listArray.push(transaction);
    displayExpenses();
})