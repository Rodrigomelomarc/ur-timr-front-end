import { Middleware, applyMiddleware, createStore } from 'redux';

export default (reducers: any, middlewares: Middleware[]): any => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
