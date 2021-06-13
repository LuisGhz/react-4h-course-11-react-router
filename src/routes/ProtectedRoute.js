import { Route, Redirect } from 'react-router-dom';
import auth from 'auth/Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route { ...rest } render={
        props => {
          if (auth.isAuthenticated()) {
            <Component { ...props } />
          } else {
            <Redirect to="/" />
          }
        }
    }/>
  )
}

export default ProtectedRoute;