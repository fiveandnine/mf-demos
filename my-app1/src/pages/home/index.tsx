
import React, { Suspense } from 'react';
import CommonBtn from '@common/CommonBtn'
export default () => {

    return <div>
        "cra-demo-page"
        <Suspense fallback=''>
            <CommonBtn />
        </Suspense>
    </div>
}