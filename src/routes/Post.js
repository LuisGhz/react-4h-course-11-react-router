import { Card } from 'react-bootstrap';

const Post = props => {
  console.log(props)
  return (
    <div>
      <Card className="shadow p-3 mb-5 bg-white rounde">
        <Card.Header>{ props.match.params.post_id }</Card.Header>
        <Card.Body>
          <Card.Title>
            Title
          </Card.Title>
          <Card.Text>Body</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post;