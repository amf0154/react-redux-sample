import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Questions from './components/Questions';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store/store';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Provider store={store}>
      <Route path='/home' component={Home} />
      <Route path='/main' component={Questions} />
      </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
