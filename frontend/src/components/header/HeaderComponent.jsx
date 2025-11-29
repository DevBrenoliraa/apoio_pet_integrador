import './styles.css';
import { Link } from 'react-router-dom';

import logo_apoio_pet from '../../assets/logo_apoio_pet/logo_apoio_pet.png';

const HeaderComponent = () => {
    return (
        <header className="container-header">
            <div className="logo-apoio-logo">
                <img src={logo_apoio_pet} className="img-apoio-logo" />
                <p className="text-apoio-logo">Apoio Pet</p>
            </div>
            <nav className="navbar">
                <a href="#" className='nav-link'>Início</a>
                <a href="#adotar" className='nav-link'>Adotar</a>
                <a href="#sobre" className='nav-link'>Sobre</a>
                <a href="#como_ajudar" className='nav-link'>Como Ajudar</a>
            </nav>
            <Link to='/login/usuario' className="btn-login-header">Entrar</Link>
        </header>
    )
}

export default HeaderComponent;