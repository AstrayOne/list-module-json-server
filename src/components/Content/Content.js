import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import ItemList from 'components/ItemList';
import SearchPanel from 'components/SearchPanel';
import CreateItemPanel from 'components/CreateItemPanel';
import ItemDetail from 'components/ItemDetail';
import Header from 'components/Header';

import styles from './Content.module.css';

const Content = () => {
  const items = useSelector((state) => state.movie.movieList);

  return (
    <div className={styles.root}>
      <Header />
      <Route exact path='/'>
        <Redirect to='/itemlist' />
      </Route>
      <Switch>
        <Route path='/itemlist' exact>
          <SearchPanel />
          <CreateItemPanel />
          <ItemList items={items} />
        </Route>
        <Route
          exact
          path="/itemlist/:id"
          render={({ match }) => {
            const { id } = match.params;
            return (
              <ItemDetail
                item={items.find((item) => {
                  if (item.id == id) return true;
                })}
              />
            );
          }}
        />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  );
}

export default Content;
