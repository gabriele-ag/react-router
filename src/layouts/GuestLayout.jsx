import AppHeader from "../components/AppHeader";
import {Outlet} from "react-router-dom";

function GuestLayout() {
    return (
    <>
        <AppHeader />
        <Outlet />
    </>
    );
};

export default GuestLayout;