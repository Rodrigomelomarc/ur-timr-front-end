import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn/index';
import Dashboard from '../pages/Dashboard/index';
import SignUp from '../pages/SignUp/index';
import ForgotPassword from '../pages/ForgotPassword/index';
import ResetPassword from '../pages/ResetPassword/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot_password" component={ForgotPassword} />
    <Route path="/reset_password" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
