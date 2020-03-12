import React from 'react';

export default function Patients() {
    return (
        <div className="content-wrapper">
            <h1>Patient List</h1>
            <div className="col-md-12 main-content">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Liz Rodriguez</td>
                            <td>Female</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Paul Rodriguez</td>
                            <td>Male</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jasom Te</td>
                            <td>Male</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Ken Gumarao</td>
                            <td>Male</td>
                            <td>18</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
