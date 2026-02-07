# Transaction List Implementation Checklist

## Overview
You're going to build a feature that displays each income/expense transaction in the "Recent Transactions" list. Each transaction will show the amount, description, category, and type (income or expense).

---

## Step 1: Create a Transaction Object
**What you're doing:** When someone clicks "Add Income" or "Add Expense", create an object that stores all the transaction details.

**Your tasks:**
- [ ] Inside your `addIncome` event listener, create a transaction object with these properties:
  - `type` (set to "income")
  - `amount` (the amountValue)
  - `description` (the descriptionValue)
  - `category` (the categoryValue)
- [ ] Do the same thing in your `addExpense` event listener (but set type to "expense")

**Example structure:**
```javascript
const transaction = {
    type: "income",  // or "expense"
    amount: amountValue,
    description: descriptionValue,
    category: categoryValue
}
```

---

## Step 2: Add Transaction to Array
**What you're doing:** Store each transaction object in your `listArray` so you can keep track of all transactions.

**Your tasks:**
- [ ] After creating the transaction object in `addIncome`, use `.push()` to add it to `listArray`
- [ ] After creating the transaction object in `addExpense`, use `.push()` to add it to `listArray`

**Hint:** `listArray.push(transaction);`

---

## Step 3: Create a Function to Display Transactions
**What you're doing:** Build a reusable function that takes your array and displays all transactions on the page.

**Your tasks:**
- [ ] Create a new function called `displayTransactions()` (put it above your event listeners)
- [ ] Inside this function, first clear the existing transaction list HTML
- [ ] Loop through `listArray` using a `for` loop or `.forEach()`
- [ ] For each transaction, create a new `<li>` element
- [ ] Set the `<li>` text content to show the transaction details
- [ ] Append each `<li>` to the `transactionList` element

**Function skeleton:**
```javascript
function displayTransactions() {
    // Clear the list first
    transactionList.innerHTML = "";
    
    // Loop through listArray
    // For each transaction:
    //   - Create an <li> element
    //   - Set its text content
    //   - Append it to transactionList
}
```

---

## Step 4: Format the Transaction Display
**What you're doing:** Make each transaction display look good with proper formatting.

**Your tasks:**
- [ ] Display the transaction type (Income or Expense)
- [ ] Show the amount with a dollar sign
- [ ] Include the description
- [ ] Show the category
- [ ] **Bonus:** Add a different color for income (green) vs expense (red)

**Example format:**
```
Income: $100 - Freelance Work (Business Money)
Expense: $50 - Gas Station (Gas)
```

---

## Step 5: Call the Display Function
**What you're doing:** Make sure the transaction list updates every time a new transaction is added.

**Your tasks:**
- [ ] Call `displayTransactions()` at the end of your `addIncome` event listener
- [ ] Call `displayTransactions()` at the end of your `addExpense` event listener

---

## Step 6: Clear the Form After Adding Transaction
**What you're doing:** Reset the form inputs after someone adds a transaction so they can easily add another one.

**Your tasks:**
- [ ] Set `amount.value = ""` to clear the amount input
- [ ] Set `description.value = ""` to clear the description input
- [ ] Optionally reset the category back to the first option

---

## Step 7: Test Your Feature
**What you're doing:** Make sure everything works as expected.

**Test cases:**
- [ ] Add an income transaction - does it appear in the list?
- [ ] Add an expense transaction - does it appear in the list?
- [ ] Add multiple transactions - do they all show up?
- [ ] Check that the form clears after each submission
- [ ] Verify the balance updates correctly AND the transaction appears

---

## Bonus Challenges (Optional)
If you finish early and want extra practice:

- [ ] Add a timestamp to each transaction showing when it was added
- [ ] Make income transactions have green text and expense transactions have red text
- [ ] Add a "Delete" button next to each transaction to remove it from the list
- [ ] Show the most recent transaction at the top instead of the bottom

---

## Key Concepts You'll Practice
- Creating and manipulating JavaScript objects
- Using array methods (`.push()`, `.forEach()` or `for` loops)
- Creating DOM elements dynamically (`document.createElement()`)
- Appending elements to the page (`.appendChild()`)
- Clearing HTML content (`.innerHTML = ""`)
- Calling functions to keep your code organized

---

## Need Help?
If you get stuck on any step:
1. Try console.logging your variables to see what they contain
2. Check the browser console for error messages
3. Ask Claude for help on the specific step you're stuck on!

Good luck! 🚀