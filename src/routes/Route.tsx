import React, { ComponentType } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { store } from '../store';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType<ReactDOMRouteProps>;
  layout: ComponentType<ReactDOMRouteProps>;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const { signed } = store.getState().auth;

  return (
    <Layout>
      <ReactDOMRoute
        {...rest}
        render={() => {
          return isPrivate === signed ? (
            <Component />
          ) : (
            <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
          );
        }}
      />
    </Layout>
  );
};

export default Route;
