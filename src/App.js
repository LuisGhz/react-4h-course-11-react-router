import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import About from 'routes/About';
import Contact from 'routes/Contact';
import Post from 'routes/Post';
import PageNotFound from 'routes/PageNotFound';
import ProtectedRoute from 'routes/ProtectedRoute';
import MainNavBar from 'routes/MainNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MainNavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <ProtectedRoute path="/about" component={ About } />
        <ProtectedRoute path="/contact" component={ Contact } />
        <ProtectedRoute path="/post/:post_id" component={ Post } />
        <Route component={ PageNotFound } />
      </Switch>
    </Router>
  );
}

export default App;
