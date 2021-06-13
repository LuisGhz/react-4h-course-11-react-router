import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import About from 'routes/About';
import Contact from 'routes/Contact';
import Post from 'routes/Post';
import MainNavBar from 'routes/MainNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MainNavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/:post_id" component={ Post } />
      </Switch>
    </Router>
  );
}

export default App;
