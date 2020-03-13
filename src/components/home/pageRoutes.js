import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../_common/protectedRoute';
import Patients from '../patient/patients';
import Dashboard from '../dashboard';

const PageRoutes = props => {
    return (
        <Switch>
            <ProtectedRoute
                path='/main/patients'
                component={Patients}
            >
            </ProtectedRoute>
            <ProtectedRoute exact path="/main" component={Dashboard} />
        </Switch>
    )
}

export default PageRoutes;