import React, { Component } from "react"

import { Provider } from "react-redux"

import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import NavigationService from "@navigationService";
import AppContainer from "./config/router/routes";
import rootReducer from "./redux/root-reducers";
import rootSaga from "./redux/root-sagas";

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const reducer = (state : any, action : any) => rootReducer(state, action)
const store = createStoreWithMiddleware(reducer)
sagaMiddleware.run(rootSaga);

class App extends Component<any, {}> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={(navigatorRef: any) => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </Provider>
    );
  }
}

export default App;
