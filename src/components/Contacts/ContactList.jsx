import s from '../Contacts/ContactList.module.css';
const shortid = require('shortid');

const ContactList = ({ contacts, onDelete}) => {
  if (contacts.length === 0) {
    return;
  }

  return (
    <div>
      <ul className={s.list}>
        {contacts.map(({ name, number }, index) => (
          <li className={s.item} key={shortid.generate()}>
            <p className={s.text}>
              {name} <span className={s.tel}>Tel: {number}</span>{' '}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
