import { Component } from 'react';
import Form from './Form/Form.jsx';
import Container from './Container/Container.jsx';
import ContactList from './Contacts/ContactList.jsx';
import FilterList from './Filter/FilterList.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handlerSubmitUser = data => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
  };

  handleDeleteUser = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((user, idx) => index !== idx),
    }));
  };

  handleFilterValue = ev => {
    this.setState({ filter: ev.target.value });
  };

  handleFilter = () => {
    const filterNormalize = this.state.filter.toLowerCase();

    return this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(filterNormalize)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleList = this.handleFilter();

    return (
      <Container>
        <Form onSubmit={this.handlerSubmitUser} />
        <FilterList
          filter={filter}
          contacts={contacts}
          onFindContacts={this.handleFilterValue}
        />
        <ContactList contacts={visibleList} onDelete={this.handleDeleteUser} />
      </Container>
    );
  }
}
