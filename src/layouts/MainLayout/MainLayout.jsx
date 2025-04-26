import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
import Navbar from '@/layouts/components/Navbar';

function MainLayout({ children }) {
    return (
        // Main container with flex column layout
        <div className="flex min-h-screen flex-col">
            {/* Header section */}
            <Header />

            {/* Navigation section */}
            <Navbar />

            {/* Main content section */}
            <main className="flex-1 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8">
                <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8">{children}</div>
            </main>

            {/* Footer section */}
            <Footer />
        </div>
    );
}

export default MainLayout;
