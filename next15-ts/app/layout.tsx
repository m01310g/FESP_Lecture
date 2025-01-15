import "newtil-css/dist/style.min.css";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>알랜드에 오신 것을 환영합니다.</title>
                <link
                    rel="stylesheet"
                    crossOrigin="anonymous"
                    as="style"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
                />
            </head>
            <body>
                <div>
                    <div>
                        <Header />
                    </div>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default Layout;
