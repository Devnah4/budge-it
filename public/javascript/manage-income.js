async function newIncomeHandler(event) {
    event.preventDefault()

    const income_type = document.querySelector('#incomeSource').value;
    const income_frequency = document.querySelector('#incomeFrequency').value;
    const income_amount = document.querySelector('#incomeAmount').value;
    const user_id = document.querySelector('#userID').textContent;

    const response = await fetch('/api/income', {
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
    });

    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText);
    }
};

async function editIncomeHandler(event) {
    event.preventDefault()

    const selected_income = document.querySelector('#editIncomeChoices').value;
    const income_type = document.querySelector('#editIncomeSource').value;
    const income_frequency = document.querySelector('#editIncomeFrequency').value;
    const income_amount = document.querySelector('#editIncomeAmount').value;

    const response = await fetch(`/api/income/${selected_income}`, {
        method: 'PUT',
        body: JSON.stringify({
            income_type,
            income_amount,
            income_frequency
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

async function deleteIncomeHandler(event) {
    event.preventDefault()

    const selected_income = document.querySelector('#deleteIncomeChoices').value;

    const response = await fetch(`/api/income/${selected_income}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#deleteIncomeForm').addEventListener('submit', deleteIncomeHandler);
document.querySelector('#editIncomeForm').addEventListener('submit', editIncomeHandler);
document.querySelector('#addIncomeForm').addEventListener('submit', newIncomeHandler);