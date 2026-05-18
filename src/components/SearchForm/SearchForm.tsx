export const SearchForm = () => {
  return (
    <form>
      <label>
        Search
        <input type="text" name="searchValue" />
      </label>
      <label>
        Search order
        <select name="orderState">
          <option value="one">asc</option>
          <option value="two">desc</option>
        </select>
      </label>
    </form>
  );
};
