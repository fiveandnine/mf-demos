
import React, { Suspense } from 'react';
import App from '@app2/App'
export default () => {

    return <div>
        <Suspense fallback=''>
            <App />
        </Suspense>
    </div>
}