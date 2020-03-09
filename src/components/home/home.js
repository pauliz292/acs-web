import React from 'react';

export default function Home() {
    return (
        <div className="container">
            <h2>Dashboard</h2>
            <hr />
            <div>
                <h4>Waiting Patients</h4>
                <table className="table table-hover">
                    <thead>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Gender</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Paul Leo</td>
                            <td>889-3453</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Liz Chin</td>
                            <td>889-3453</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jason Te</td>
                            <td>889-3453</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Lima Sy</td>
                            <td>889-3453</td>
                            <td>Male</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
