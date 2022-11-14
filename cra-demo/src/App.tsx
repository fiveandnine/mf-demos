import React, { Suspense } from 'react';
import CommonBtn from '@common/CommonBtn'
const Button = React.lazy(() => import('@common/CommonBtn'));

export default () => {

    return <div>
        cra-demo-page111
        {/* <Suspense fallback=''> */}
            <CommonBtn />
            xxxx
            <Button/>
        {/* </Suspense> */}
    </div>
}