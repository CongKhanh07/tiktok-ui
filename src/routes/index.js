// Import layouts
import HeaderOnly from '~/layouts/HeaderOnly';

// Import pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import config from '~/config';

//Don't have to login
const publicRoutes = [
    { path: config.pathName.home, component: Home },
    { path: config.pathName.following, component: Following },
    { path: config.pathName.profile, component: Profile },
    { path: config.pathName.upload, component: Upload, layout: HeaderOnly },
    { path: config.pathName.search, component: Search, layout: null },
];

//Have to login to access
const privateRoutes = [];

export { publicRoutes, privateRoutes };
