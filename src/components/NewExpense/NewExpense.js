import React from "react";
import ExpenseForm from "../Expenses/ExpenseForm";
import './NewExpense.css'

const newExpense = () => {
    return <div className="new-expense">
        <ExpenseForm />
    </div>

};

export default newExpense;