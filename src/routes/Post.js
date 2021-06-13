import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const Post = props => {
  console.log(props)
  const [post, setPost] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.post_id}`)
      setPost(res.data);
    })()
  }, [props.match.params.post_id])

  return (
    <div>
      <Card className="shadow p-3 mb-5 bg-white rounde">
        <Card.Header className="text-center" >{ post.title }</Card.Header>
        <Card.Body>
          <Card.Text className="text-center" >{ post.body }</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post;