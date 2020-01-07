import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Questions from './components/Questions';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Form from './components/Form';
import store from './store/store';
function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Switch>
      <Provider store={store}>
      <Route path='/home' component={Home} />
      <Route path='/main' component={Questions} />
      <Route path='/form' component={Form} />
      </Provider>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
