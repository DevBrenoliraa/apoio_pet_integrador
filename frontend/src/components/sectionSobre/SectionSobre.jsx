import './styles.css'

import icon_animais from '../../assets/img/icon-animais.png';
import icon_social from '../../assets/img/icon-social.png';
import icon_zoonoses from '../../assets/img/icon-zoonoses.png';

const SectionSobre = () => {
    return (
        <section id="sobre">
            <h1 className="title-sobre">Nossa missão</h1>
            <p className="description-sobre">Desenvolver uma ação social permanenente e efetiva para o amparo de animais abandonados, promovendo bem-estar animal e saúde pública.</p>
            <div className="cards-sobre">
                <div className="card">
                    <img src={icon_animais} alt="" className="icon-sobre" />
                    <p className="title-card">Amparo aos Animais</p>
                    <p className="txt-card">Resgatamos e cuidamos de animais em situação de abandono, proporcionando tratamento e abrigo adequado.</p>
                </div>
                <div className="card">
                    <img src={icon_social} alt="" className="icon-sobre" />
                    <p className="title-card">Controle de Zoonoses</p>
                    <p className="txt-card">Contribuímos para a saúde pública através do controle de doenças transmitidas por animais.</p>
                </div>
                <div className="card">
                    <img src={icon_zoonoses} alt="" className="icon-sobre" />
                    <p className="title-card">Engajamento Social</p>
                    <p className="txt-card">Mobilizamos a comunidade para uma causa nobre, criando uma rede de apoio e conscientização.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionSobre