import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../FilterExpenses/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

import './Expenses.css'

const Expenses = ({ data }) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = data.filter(expense => expense.date.getFullYear() === parseInt(selectedYear));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter addSelectedYear={filterChangeHandler} selected={selectedYear} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;