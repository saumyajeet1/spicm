import React from 'react';
import Layout from './Components/hoc/layout';
import { Switch, Route }  from 'react-router-dom';

import Home from './Components/main/home';
import Team from './Components/main/team';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={Team} path="/"/>
            
        </Switch>
    </Layout>
  )
}

export default Routes;
