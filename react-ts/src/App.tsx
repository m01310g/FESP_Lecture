import Layout from "./pages/layout";
import Login from "./pages/login";
import Page from "./pages/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
