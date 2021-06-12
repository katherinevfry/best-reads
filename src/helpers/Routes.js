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

export default function Routes({
  user, books, setBooks, bookshelves, setBookshelves
}) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
        <PrivateRoute
        exact
        path='/bookshelves'
        user={user}
        component={() => <BookshelvesView bookshelves={bookshelves} setBookshelves={setBookshelves}user={user} />}
        />
        <PrivateRoute
        exact
        path='/bookshelves/:firebaseKey'
        user={user}
        component={() => <SingleBookshelf user={user} setBooks={setBooks} books={books} />}
        />
        <PrivateRoute
        exact
        path='/books'
        user={user}
        component={() => <BooksView books={books} setBooks={setBooks} user={user}/>}
        />
        <PrivateRoute
        exact
        path='/explore'
        user={user}
        component={Explore}
        />
        <PrivateRoute
        exact
        path='/search'
        user={user}
        component={() => <Search setBooks={setBooks} user={user}/>}
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
  setBooks: PropTypes.func,
  bookshelves: PropTypes.array,
  setBookshelves: PropTypes.func
};
