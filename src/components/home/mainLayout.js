import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import LoadingOverlay from "react-loading-overlay";
import "bootstrap";
import "react-toastify/dist/ReactToastify.css";

import * as patientService from '../../_services/patientService';
import Header from './header';
import SideBar from './sidebar';
import Footer from './footer';
import PageRoutes from "./pageRoutes";

export default function MainLayout() {

    const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        // getting all patients from API
        patientService.getPatients();
    })

    const handleToggleOverlay = () => {
        setLoading(false);
    }

    return (
        <LoadingOverlay active={isLoading} spinner text="Loading...">
            <ToastContainer />
            <Header />
            <SideBar />
            <div className="container-fluid">
                <PageRoutes 
                    toggleLoadingOverlay={handleToggleOverlay}
                />
            </div>
            <Footer />
        </LoadingOverlay>
    )
}
