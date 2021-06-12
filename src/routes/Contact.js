import { Container } from 'react-bootstrap';
import faker from 'faker';

const Contact = () => {
  return (
    <Container fluid={ true }>
      <h4>Contact</h4>
      <p>{ faker.lorem.paragraph() }</p>
    </Container>
  );
}

export default Contact;