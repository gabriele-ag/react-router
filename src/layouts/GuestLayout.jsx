import AppHeader from "../components/AppHeader";
import {Outlet} from "react-router-dom"

function GuestLayout() {
    <>
        <AppHeader />
        <Outlet />
    </>
}

export default GuestLayout