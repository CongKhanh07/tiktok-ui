import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';

// Import file
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import HeaderOnly from './components/Layout/HeaderOnly';

//Function App
function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home page</Link>
                <Link to="/following">Following page</Link>
                <Link to="/upload">Upload page</Link>
                <Link to="/search">Search page</Link>
            </nav>

            {/* Router */}
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
