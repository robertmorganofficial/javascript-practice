const currentBalanceNumber = document.getElementById("currentBalanceNumber");
const addIncome = document.getElementById("addIncome");
const addExpense = document.getElementById("addExpense");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const submitButton = document.getElementById("submitButton");
const transactionList = document.getElementById("transactionList");

const listArray = [];

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = document.getElementById("amount");
    const amountValue = amount.value;

    const description = document.getElementById("description");
    const descriptionValue = description.value;

    const category = document.getElementById("category");
    const categoryValue = category.value;



    console.log(amountValue);
    console.log(descriptionValue);
    console.log(categoryValue);
    console.log("the button works!")
})