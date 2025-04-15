export default function Table({ expenses }) {
  //const expenseData = [];
  
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Expenses</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>      
                {/*adds aunique key for each row*/}
                <td>{expense.expense}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
 };