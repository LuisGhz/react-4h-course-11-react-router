import { Container } from 'react-bootstrap';
import faker from 'faker';

const About = () => {
  return (
    <Container fluid={ true }>
      <h4>About</h4>
      <p>{ faker.lorem.paragraph() }</p>
    </Container>
  );
}

export default About;