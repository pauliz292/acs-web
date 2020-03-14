import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/login';

const Home = props => {
    const display = !props.user ? (
        <Login />
    ) : (
        <div className="card">
            <div className="card-body text-center">
                <h2>
                    Welcome back <strong>{props.user.role}</strong>
                </h2>
                <br />
                <Link to="/main" className="btn btn-primary">
                    Enter
                </Link>
            </div>
        </div>
    )

    return (
        <>
            {display}
        </>
    )
}

export default Home;