import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Patients from '../patient/patients';
import Dashboard from '../dashboard';

const PageRoutes = props => {
    return (
        <Switch>
            <Route
                path='/main/patients'
                component={Patients}
            >
            </Route>
            <Route exact path="/main" component={Dashboard} />
        </Switch>
    )
}

export default PageRoutes;