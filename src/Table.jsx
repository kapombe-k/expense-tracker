export default function Table({ expenses }) {
  //const expenseData = [];
  
  
    return (
      <div className="basis-2/3">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-cyan-200">
                Expenses
              </th>
              <th className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-cyan-200">
                Description
              </th>
              <th className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-cyan-200">
                Category
              </th>
              <th className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-cyan-200">
                Amount
              </th>
              <th className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-cyan-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                {/*adds aunique key for each row*/}
                <td className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-fuchsia-400">
                  {expense.expense}
                </td>
                <td className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-fuchsia-400">
                  {expense.description}
                </td>
                <td className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-fuchsia-400">
                  {expense.category}
                </td>
                <td className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-fuchsia-400">
                  {expense.amount}
                </td>
                <td className="p-2 rounded-md ml-2 text-neutral-900 border-2 bg-fuchsia-400">
                  {expense.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
 };