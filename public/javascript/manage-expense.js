async function newExpenseHandler(event) {
    event.preventDefault()

    const expense_name = document.querySelector('input[name="expenseName"]').value
    const expense_type = document.querySelector('input[name="expenseType"]').value
    const expense_frequency = document.querySelector('input[name="expenseFrequency"]').value
    const expense_amount = document.querySelector('input[name="expenseAmount"]').value

    const response = await fetch('/api/expense', {
        method: 'POST',
        body: JSON.stringify({
            expense_name,
            expense_type,
            expense_frequency,
            expense_amount
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })

    if (response.ok) {
        document.location.reload
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.addExpenseForm').addEventListener('click', newExpenseHandler)