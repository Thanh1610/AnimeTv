import Header from './Header';
import Footer from './Footer';
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
