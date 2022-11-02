import Navbar from "./components/navbar";

import "./main.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <head></head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
