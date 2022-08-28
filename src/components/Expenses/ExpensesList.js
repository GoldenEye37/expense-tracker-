import "../UI/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // in react you can pass JSX code as a value like below

  if (props.items === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
