
import React, { Suspense } from 'react';
import App from '@app1/App'
export default () => {

    return <div>
        "cra-demo-page"
        <Suspense fallback=''>
            <App />
        </Suspense>
    </div>
}