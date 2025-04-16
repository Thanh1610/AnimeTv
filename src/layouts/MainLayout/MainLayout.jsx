import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
