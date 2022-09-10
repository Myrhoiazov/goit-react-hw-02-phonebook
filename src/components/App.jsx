import { Component } from 'react';
import Form from './Form/Form';
import Container from './Container/Container';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <Container>
        <Form />
        <Contacts contacts={contacts} />
      </Container>
    );
  }
}
