
import React, { Suspense } from 'react';
import CommonBtn from '@common/CommonBtn'
export default () => {

    return <div>
        <div>main homepage</div>
        <Suspense fallback=''>
            <CommonBtn />
        </Suspense>
    </div>
}