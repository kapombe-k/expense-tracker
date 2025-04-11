export function Form() {
    return (
      <div>
        <h3>Add expense</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          
        }}>
          <input type="text" placeholder="Expense" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Category" />
          <input type="number" placeholder="Amount" />
          <input type="date" placeholder="Date" />
        </form>
      </div>
    );
 };