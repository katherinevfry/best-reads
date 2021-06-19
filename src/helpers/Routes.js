import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookshelvesView from '../views/BookshelvesView';
import BooksView from '../views/BooksView';
import Explore from '../views/Explore';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Search from '../views/Search';
import SingleBookshelf from '../views/SingleBookshelf';
import ShareBook from '../views/ShareBook';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ user, books }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={() => <Home user={user} books={books}/>}
        />
        <PrivateRoute
        exact
        path='/bookshelves'
        user={user}
        component={() => <BookshelvesView user={user} />}
        />
        <PrivateRoute
        exact
        path='/bookshelves/:firebaseKey'
        user={user}
        component={() => <SingleBookshelf user={user} />}
        />
        <PrivateRoute
        exact
        path='/books'
        user={user}
        component={() => <BooksView user={user}/>}
        />
        <PrivateRoute
        exact
        path='/explore'
        user={user}
        component={() => <Explore user={user}/>}
        />
        <PrivateRoute
        exact
        path='/search'
        user={user}
        component={() => <Search user={user}/>}
        />
        <Route
        exact
        path='/books/:firebaseKey'
        component={() => <ShareBook user={user}/>}
        />
        <Route
        path='*'
        component={NotFound}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  books: PropTypes.array,
};
