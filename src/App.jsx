import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Fragment } from 'react';

import { publicRoutes } from '@/routes/routes';
import MainLayout from '@/layouts/MainLayout';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.component;
                        let Layout = MainLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
