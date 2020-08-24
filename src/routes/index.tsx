import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn/index';
import Dashboard from '../pages/Dashboard/index';
import SignUp from '../pages/SignUp/index';
import ForgotPassword from '../pages/ForgotPassword/index';
import ResetPassword from '../pages/ResetPassword/index';
import Profile from '../pages/Profile/index';

import ExternalLayout from '../components/_layouts/external/index';
import InternalLayout from '../components/_layouts/internal/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} layout={ExternalLayout} />
    <Route path="/signup" component={SignUp} layout={ExternalLayout} />
    <Route
      path="/forgot_password"
      component={ForgotPassword}
      layout={ExternalLayout}
    />
    <Route
      path="/reset_password"
      component={ResetPassword}
      layout={ExternalLayout}
    />

    <Route
      path="/dashboard"
      component={Dashboard}
      layout={InternalLayout}
      isPrivate
    />
    <Route
      path="/profile"
      component={Profile}
      layout={InternalLayout}
      isPrivate
    />
  </Switch>
);

export default Routes;
