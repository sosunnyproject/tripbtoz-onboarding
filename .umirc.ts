import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/basic' },
        { path: '/basic', component: '../pages/basic' },
        { path: '/editprice', component: '../pages/editprice' },
        { path: '/editstorage', component: '../pages/editstorage' },
        { path: '/onlinemanager', component: '../pages/onlinemanager' },
        { path: '/promotion', component: '../pages/promotion' },
        { path: '/reservation', component: '../pages/reservation' },
        { path: '/room', component: '../pages/room' },
        { path: '/totalprice', component: '../pages/totalprice' },
        { path: '/edituser', component: '../pages/edituser' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'tripbtoz-onboarding',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
