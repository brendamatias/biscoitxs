import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Products from '~/pages/Products';
import Details from '~/pages/Details';
import Provider from '~/pages/Provider';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Addresses from '~/pages/Addresses';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route path="/details/:product" component={Details} />
      <Route path="/profile/:user" component={Provider} />

      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/addresses" component={Addresses} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
