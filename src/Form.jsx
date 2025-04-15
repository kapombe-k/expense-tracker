import { useState } from "react";

export default function Form({ onAddExpense }) {//remeber the curly braces when destructuring
  const [trackExpense, setExpense] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
    });// this captures form data into an object

  console.log(trackExpense);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(trackExpense);

    console.log("Working till here")//this part clears the form
    setExpense({
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleExpense = (e) => {
    setExpense({
      ...trackExpense, [e.target.name]:e.target.value
    })
   };
  

  return (
    <div>
      <h3>Add expense</h3>
      <form
        onSubmit={handleSubmit}
        onChange={handleExpense}
      >
        <input
          type="text"
          placeholder="Expense"
          value={trackExpense.expense}
          name="expense"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={trackExpense.description}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={trackExpense.category}
          />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={trackExpense.amount}
          />
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={trackExpense.date}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
