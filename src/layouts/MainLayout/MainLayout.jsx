import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
import Navbar from '@/layouts/components/Navbar';
function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="content py-5">{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
