import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro';
import LoginUsuario from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import AnimaisAdocao from '../pages/Animais/AnimaisAdocao';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro/usuario" element={<Cadastro/>} />
                <Route path="/login/usuario" element={<LoginUsuario/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/animais" element={<AnimaisAdocao/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes