import React from "react";
import auth from "../../_services/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!auth.getCurrentUser())
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;