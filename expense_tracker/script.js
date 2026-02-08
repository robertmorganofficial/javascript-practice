const currentBalanceNumber = document.getElementById("currentBalanceNumber");
const addIncome = document.getElementById("addIncome");
const addExpense = document.getElementById("addExpense");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const transactionList = document.getElementById("transactionList");
const balanceAmount = document.getElementById("balanceAmount");
const updateBalance = document.getElementById("updateBalance");
const updateBalanceGroup = document.getElementById("updateBalanceGroup");
let currentBalance = 0;
const listArray = [];


function displayTranscaction() {

    transactionList.innerHTML = "";
    listArray.forEach(transaction => {
        const li = document.createElement("li");
            if (transaction.type === "income"){
                li.textContent = ` + $${transaction.amount} - ${transaction.description}`;
                li.classList.add("transaction-income");
            } else {
                li.textContent = ` - $${transaction.amount} - ${transaction.description}`;
                li.classList.add("transaction-expense");
            }
            
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

    currentBalance += amountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;

    const transaction = {
        type: "income",
        amount: amountValue,
        description: descriptionValue
    }

    listArray.push(transaction);
    displayTranscaction();
})

addExpense.addEventListener("click", function (f) {
    f.preventDefault();
    const amountValue = Number(amount.value);
    const descriptionValue = description.value;

    currentBalance -= amountValue;
    currentBalanceNumber.textContent = "$" + `${currentBalance}`;

    const transaction = {
        type: "expense",
        amount: amountValue,
        description: descriptionValue
    }

    listArray.push(transaction);
    displayTranscaction();
})