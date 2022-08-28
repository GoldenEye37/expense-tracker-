import "../UI/Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* this is approach uses a javascript concept where if
          the first contion is true it returns the other expression 
          after the && operator */}
      {filteredExpenses.length===0 && <p> No Expenses Found!</p>} 
        
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
        
    </Card>
  );
}

export default Expenses;
