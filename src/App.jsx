import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { publicRoutes } from '@/routes/routes';
import MainLayout from '@/layouts/MainLayout';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollToTopBtn from '@/components/ScrollToTopBtn';
import { UserProvider } from './contexts/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <ScrollToTop />
                <ScrollToTopBtn />
                <ToastContainer position="top-center" style={{ zIndex: 99999 }} autoClose={3000} />
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
        </UserProvider>
    );
}

export default App;
