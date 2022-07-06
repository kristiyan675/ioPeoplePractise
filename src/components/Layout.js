import React from "react";
import '../style.scss';
import Navigation from "./Homepage/Navigation/Navigation";

const Layout = ({children}) => {
    return (
        <React.Fragment>
        <Navigation />
            {children}
        </React.Fragment>
    )
}

export default Layout;


