import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = () => {
  return (
    // <Modulelayout>
    <Switch>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </Switch>
    // </Modulelayout>
  );
};

export default Dashboard;
