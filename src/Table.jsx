export  default function Table({expense,description,category,amount,date}) {
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