// Import layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

// Import pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import pathName from '~/config/pathName';

//Don't have to login
const publicRoutes = [
    { path: pathName.home, component: Home },
    { path: pathName.following, component: Following },
    { path: pathName.profile, component: Profile },
    { path: pathName.upload, component: Upload, layout: HeaderOnly },
    { path: pathName.search, component: Search, layout: null },
];

//Have to login to access
const privateRoutes = [];

export { publicRoutes, privateRoutes };
