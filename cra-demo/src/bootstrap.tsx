import ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import CommonBtn from '@common/CommonBtn'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Button = React.lazy(() => import('@common/CommonBtn'));

root.render(
  <React.StrictMode>
    cra-demo-page
        {/* <Suspense fallback=''> */}
            <CommonBtn />
        {/* </Suspense> */}
        <Button/>
  </React.StrictMode>
);



/**
 * main.js
 */
//  import testA from './webpack-demo/moduleA';

//  testA();
 
//  import('./webpack-demo/moduleB').then((module) => {});