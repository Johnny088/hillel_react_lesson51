import css from './SearchForm.module.css';

interface Props {
  onSubmit: (searchKey: string, searchOrder: 'name' | 'age') => void;
}

export const SearchForm = ({ onSubmit }: Props) => {
  const submitHandler = (formdata: FormData) => {
    const searchValue = formdata.get('searchValue') as string;
    const searchOrder = formdata.get('orderState') as 'name' | 'age';
    onSubmit(searchValue, searchOrder);
  };
  return (
    <form className={css.formContainer} action={submitHandler}>
      <label>
        Search by name
        <input type="text" name="searchValue" />
      </label>
      <label>
        Sort by:
        <select name="orderState">
          <option value="name">Name</option>
          <option value="age">Age</option>
        </select>
      </label>
      <button className={css.submitBtn}>get users</button>
    </form>
  );
};
