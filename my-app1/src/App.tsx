import React from 'react';
import {
  Redirect,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Layout from './components/layout';
import List from './pages/list';


export default () => {

  return (<>
    <Route exact path="/app1">
      <Layout><Home /></Layout>
    </Route>
    <Route exact path="/app1/list">
    <Layout><List /></Layout>
    </Route>
    {/* <Route exact path="/app1/:id">
      <Redirect to="/app1" />
    </Route> */}
  </>);
};
