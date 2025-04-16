export default function Search() {
    return (
      <div>
        <search>
          <input
            type="search"
            name="search"
            id="search-bar"
            placeholder="Search expense"
            className="border rounded-2xl p-2.5 w-[50%]"
          />
          <button>Search</button>
        </search>
      </div>
    );
 };