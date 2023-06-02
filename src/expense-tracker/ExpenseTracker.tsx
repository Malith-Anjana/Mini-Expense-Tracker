import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";


const ExpenseTracker = () => {
  const [selectedCategory, setselectedCategory] = useState("")
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbbb", amount: 10, category: "Utilities" },
    { id: 3, description: "cccc", amount: 10, category: "Groceries" },
    { id: 4, description: "dddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense=>setExpenses([...expenses, {...expense, id:expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setselectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      />
    </div>
    
  );
};

export default ExpenseTracker;
