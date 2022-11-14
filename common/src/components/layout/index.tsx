import React from "react";

export default ({
    children,
}: {
    children: React.ReactNode,
}) => {

    return <div>
        <div>layouttttt</div>
        --------------------------------------------------
        {children}
    </div>
}