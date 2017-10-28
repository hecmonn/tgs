import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Home from './src/components/Home';
import {rootReducer} from './src/reducers';

//onst loggerMidd=createLogger({predicate: (getState,action)=>__DEV__});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware)
  )
)

class Main extends Component{
  render (){
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('tgs', () => Main);
