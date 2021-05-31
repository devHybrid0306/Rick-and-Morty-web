import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DetailPage from './pages/detail';
import MainPage from './pages/main';
import { paths } from './constants/paths';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={paths.main} component={MainPage} />
      <Route exact path={paths.detail} component={DetailPage} />
      <Redirect to={paths.main} />
    </Switch>
  );
};

export default AppRoutes;
