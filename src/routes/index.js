// Import layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

// Import pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Don't have to login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

//Have to login to access
const privateRoutes = [];

export { publicRoutes, privateRoutes };
