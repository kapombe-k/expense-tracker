import { useState } from "react";
import Form from "./Form";

export default function Table({ expense, description, category, amount, date }) {
  const [trackExpense, setExpense] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  //const expenseData = [];
  
  
    return (
      <div>
        <table>
          <tr>
            <th>Expenses</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>{expense}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{date}</td>
          </tr>
        </table>
      </div>
    );
 };