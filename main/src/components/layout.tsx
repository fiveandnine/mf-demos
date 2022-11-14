import React from "react";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
export default ({
    children
}: {
    children?: React.ReactNode,
}) => {
    const navList = [
        "/", '/login', '/app1', "/app1/list",, '/app2', "/app2/list"
    ]
    return <div style={{
        border: '1px solid red',
        margin: '10px',
    }}>
        <div>main layout</div>
        {
        navList.map((item: any) => {
            return <Link key={item} style={{
                margin: '10px',
            }} to={item}>{item}</Link>
        })
        
        }
       
        {children}
        {/* <Outlet /> */}
    </div>
}