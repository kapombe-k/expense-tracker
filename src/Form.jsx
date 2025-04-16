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
    <div className="w-2xs shadow rounded-md border-2 basis-1/3">
      <h3 className="p-1 font-bold ml-22.5">Add expense</h3>
      <form onSubmit={handleSubmit} onChange={handleExpense}>
        <input
          className="border-2 rounded-md w-[90%] p-1 ml-3 "
          type="text"
          placeholder="Expense"
          value={trackExpense.expense}
          name="expense"
        />
        <input
          className="border-2 rounded-md w-[90%] p-1 ml-3"
          type="text"
          placeholder="Description"
          name="description"
          value={trackExpense.description}
        />
        <input
          className="border-2 rounded-md w-[90%] ml-3 p-1"
          type="text"
          placeholder="Category"
          name="category"
          value={trackExpense.category}
        />
        <input
          className="border-2 rounded-md w-[90%] ml-3 p-1"
          type="number"
          placeholder="Amount"
          name="amount"
          value={trackExpense.amount}
        />
        <input
          className="border-2 rounded-md w-[90%] ml-3 p-1 "
          type="date"
          placeholder="Date"
          name="date"
          value={trackExpense.date}
        />
        <button className=" caret-emerald-600 mt-3 ml-25 " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
