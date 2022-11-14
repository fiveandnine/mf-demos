import React from 'react';
import {
  Route,
} from "react-router-dom";
import './App.css';
import { createBrowserHistory } from "history";

import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout';
import App1Router from './pages/app1';
import App2Router from './pages/app2';
function App() {
  return (
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <App1Router/>
          <App2Router/>
        </Layout>
  );
}

export default App;
