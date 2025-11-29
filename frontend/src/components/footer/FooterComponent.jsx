import './styles.css';

import logo from '../../assets/logo_apoio_pet/logo_apoio_pet.png'

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="logo-apoiopet">
                        <img src={logo} alt="Logo Apoio Pet" />
                        <h3>Apoio Pet</h3>
                    </div>
                    <p className="footer-description">
                        Ação social permanente dedicada ao amparo de animais abandonados e promoção do bem-estar animal em nossa comunidade.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>Email: <a href="mailto:contato@apoiopet.org.br">contato@apoiopet.org.br</a></p>
                    <p>Telefone: <a href="tel:+5582999999999">(82) 99999-9999</a></p>
                    <p>Localização: Maceió, AL</p>
                </div>
                <div className="footer-section">
                    <h4>Links Rápidos</h4>
                    <ul className="footer-links">
                        <li><a href="#sobre">Sobre nós</a></li>
                        <li><a href="#como_ajudar">Como Ajudar</a></li>
                        <li><a href="#beneficios">Benefícios</a></li>
                        <li><a href="#privacidade">Política de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Apoio Pet. Todos os direitos reservados. Desenvolvido com ❤️ para os animais.</p>
            </div>
        </footer>
    )
}

export default FooterComponent