import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../_common/protectedRoute';
import Patients from '../patient/patients';
import PatientForm from '../patient/addPatient';
import Dashboard from '../dashboard';

const PageRoutes = props => {
    return (
        <Switch>
            <ProtectedRoute
                path='/main/patients'
                component={Patients}
            />
            <ProtectedRoute
                path='/main/addPatient'
                component={PatientForm}
            />
            <ProtectedRoute exact path="/main" component={Dashboard} />
        </Switch>
    )
}

export default PageRoutes;