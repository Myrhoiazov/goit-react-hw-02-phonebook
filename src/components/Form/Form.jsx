import s from './Form.module.css'


const Form = () => {
  return (
    <form className={s.form}>
      <label>
        <span className={s.label}>Name</span>
        <input className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <button className={s.btn} type='button'>Add contact</button>
    </form>
  );
};

export default Form;
