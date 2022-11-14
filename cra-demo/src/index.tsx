import testA from './webpack-demo/moduleA';

testA();

import('./webpack-demo/moduleB').then((module) => {});