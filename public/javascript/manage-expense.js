async function newExpenseHandler(event) {
    event.preventDefault()

    const expense_name = document.querySelector('#expenseName').value;
    const expense_type = document.querySelector('#expenseType').value;
    const expense_frequency = document.querySelector('#expenseFrequency').value;
    const expense_amount = document.querySelector('#expenseAmount').value;
    const user_id = document.querySelector('#userID').textContent;
    

    const response = await fetch('/api/expense', {
        method: 'POST',
        body: JSON.stringify({
            expense_name,
            expense_type,
            expense_frequency,
            expense_amount,
            user_id
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    });

    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText);
    }
};

async function editExpenseHandler(event) {
    event.preventDefault()

    const selected_expense = document.querySelector('#editExpenseChoices').value;
    const expense_name = document.querySelector('#editExpenseName').value;
    const expense_type = document.querySelector('#editExpenseType').value;
    const expense_frequency = document.querySelector('#editExpenseFrequency').value;
    const expense_amount = document.querySelector('#editExpenseAmount').value;

    const response = await fetch(`/api/expense/${selected_expense}`, {
        method: 'PUT',
        body: JSON.stringify({
            expense_name,
            expense_type,
            expense_frequency,
            expense_amount,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText);
    }
};

async function deleteExpenseHandler(event) {
    event.preventDefault()

    const selected_expense = document.querySelector('#deleteExpenseChoices').value

    const response = await fetch(`/api/expense/${selected_expense}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#deleteExpenseForm').addEventListener('submit', deleteExpenseHandler);
document.querySelector('#addExpenseForm').addEventListener('submit', newExpenseHandler);
document.querySelector('#editExpenseForm').addEventListener('submit', editExpenseHandler);