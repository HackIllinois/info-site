import Navbar from "@/components/navbar";
import Footer from "@/components/Footer/Footer";

import "./globals.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <head></head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
