import React from "react";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
export default ({
    children
}: {
    children?: React.ReactNode,
}) => {

    return <div style={{
        border: '1px solid blue',
        margin: '10px',
    }}>
        <div>app1 layout</div>
        <Link style={{
            margin: '10px',
        }} to="/app1">home</Link>

        <Link style={{
            margin: '10px',
        }} to="/app1/list">list</Link>
        
        {children}

        {/* <Outlet /> */}
    </div>
}