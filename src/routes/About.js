import { Container } from 'react-bootstrap';
import faker from 'faker';
import Colorful from 'hoc/Colorful'

const About = () => {
  return (
    <Container fluid={ true }>
      <h4>About</h4>
      <p>{ faker.lorem.paragraph() }</p>
    </Container>
  );
}

export default Colorful(About);