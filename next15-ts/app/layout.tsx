import "newtil-css/dist/style.min.css";
import "./global.css";
import "./icons.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>알랜드에 오신 것을 환영합니다.</title>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
