import css from './SearchForm.module.css';
export const SearchForm = () => {
  return (
    <form className={css.formContainer}>
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
