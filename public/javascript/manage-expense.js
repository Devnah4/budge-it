async function newExpenseHandler(event) {
    event.preventDefault()

    const expense_name = document.querySelector('#expenseName').value
    const expense_type = document.querySelector('#expenseType').value
    const expense_frequency = document.querySelector('#expenseFrequency').value
    const expense_amount = document.querySelector('#expenseAmount').value
    const user_id = document.querySelector('#userID').textContent
    

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
    })

    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText);
        console.log(user_id)
    }
}

document.querySelector('#addExpenseForm').addEventListener('submit', newExpenseHandler)