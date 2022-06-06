async function newIncomeHandler(event) {
    event.preventDefault()

    const income_type = document.querySelector('#incomeType').value
    const income_frequency = document.querySelector('#incomeFrequency').value
    const income_amount = document.querySelector('#incomeAmount').value
    const user_id = document.querySelector('#userId').textContent

    const response = await fetch('api/income', {
        method: 'POST',
        body: JSON.stringify({
            income_type,
            income_amount,
            income_frequency,
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
    }
}

document.querySelector('#addIncomeForm').addEventListener('submit', newIncomeHandler);