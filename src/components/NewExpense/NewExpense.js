import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(!showForm);
    ;}

    const onClickHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={onClickHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpensedata={saveExpenseDataHandler} onCancelForm={onClickHandler}/>}
        </div>
    );
}

export default NewExpense;