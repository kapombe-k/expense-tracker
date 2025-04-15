import "./App.css";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    const expenseId = { ...newExpense, id: Date.now() };
    setExpenses([...expenses, expenseId]);
  };

  return (
    <div>
      <Header />
      <Form onAddExpense={handleAddExpense} />
      <Table expenses={expenses} />
    </div>
  );
}

export default App;
