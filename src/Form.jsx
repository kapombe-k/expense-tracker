import { useState } from "react";

export default function Form() {
  const [trackExpense, setExpense] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log()
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
