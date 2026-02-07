const currentBalanceNumber = document.getElementById("currentBalanceNumber");
const addIncome = document.getElementById("addIncome");
const addExpense = document.getElementById("addExpense");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const transactionList = document.getElementById("transactionList");
const balanceAmount = document.getElementById("balanceAmount");
const updateBalance = document.getElementById("updateBalance");
let currentBalance = 0;
const listArray = [];

updateBalance.addEventListener("click", function (d) {
    d.preventDefault();
    const balanceAmountValue = Number(balanceAmount.value);
    currentBalance = balanceAmountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;
})

addIncome.addEventListener("click", function (e) {
    e.preventDefault();
    const amountValue = Number(amount.value);
    const descriptionValue = description.value;
    const categoryValue = category.value;

    currentBalance += amountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;
})