import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data.slice(0, 5));
    })()
  }, [])

  const listMarkup = posts.length > 0 ? (
    posts.map(post => (
        <Card key={ post.id } className="shadow p-3 mb-5 bg-white rounde">
          <Card.Body>
            <Card.Title>
              <Link to={ `/${post.id}` } >{ post.title }</Link>
            </Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
    ))
  ) : (<p>Not cards founds</p>);

  return (
    <Container fluid={true}>
      <h4>Home</h4>
      { listMarkup }
    </Container>
  );
}

export default Home;