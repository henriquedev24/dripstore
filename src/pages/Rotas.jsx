import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Categoria from "./Categoria";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListingPage from "./ProductListingPage";
import NotDefault from "./NotFound";
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
function Rotas() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home></Home>}></Route>
                <Route path="/Lista-Produtos" element={<ProductListingPage/>}></Route>
                <Route path="/Categoria" element={<Categoria></Categoria>}></Route>
                <Route path="/Lista-Produtos" element={<ProductListingPage/>} ></Route>
                <Route path="*" element={<NotDefault></NotDefault>} />
                <Route path="/Cadastro" element={<Cadastro/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
            </Routes>
            <Footer />
        </>
    )

}
export default Rotas