import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContainer from './Containers/AppContainer';
import ProductDetailsContainer from './Containers/ProductDetailsContainer.js';
import CartWidgetContainer from './Containers/CartWidgetContainer';
import CartContainer from './Containers/CartContainer';

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <AppContainer />} />
        <Route exact path="/products/:id" render={(routeProps) => <React.Fragment><CartWidgetContainer /><ProductDetailsContainer routeProps={routeProps}/></React.Fragment>} />
        <Route exact path="/cart" render={() => <CartContainer />} />
      </Switch>
    )
  }
}

export default Routes;