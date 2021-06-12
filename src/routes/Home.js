import { Container } from 'react-bootstrap';
import faker from 'faker';

const Home = () => {
  return (
    <Container fluid={ true }>
      <h4>Home</h4>
      <p>{ faker.lorem.paragraph() }</p>
    </Container>
  );
}

export default Home;