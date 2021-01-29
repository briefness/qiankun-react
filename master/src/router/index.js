/*
 * @Author: your name
 * @Date: 2021-01-28 17:16:00
 * @LastEditTime: 2021-01-29 15:22:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-react/master/router/index.js
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "../login";
import ErrorPage from "../errorPage";

const RouteIndex = (props) => {
  return (
    <Router>
      {/* <Suspense fallback={null}> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/404" component={ErrorPage} />
        </Switch>
      {/* </Suspense> */}
    </Router>
  );
};

export default RouteIndex;

