import './styles.css'
import {Link} from 'react-router-dom'

import dinheiro from '../../assets/img/Dinheiro.png';
import telefone from '../../assets/img/TELEFONE.png';
import brilho from '../../assets/img/Brilho.png';
import compartilhar from '../../assets/img/Compartilhar.png';

const SectionComoJudar = () => {
  return (
    <section id='como_ajudar'>
        <h1 className="title-ajudar">Como Você Pode Ajudar</h1>
        <p className="description-ajudar">Existem diversas formas de fazer parte desta transformação. Escolha a que mais combina com você!</p>
        <div className="cards-ajudar">
            <div className="card-ajudar">
                <img src={dinheiro} alt="" className="icon-ajuda" />
                <p className="title-card-ajudar">Faça uma Doação</p>
                <p className="txt-ajudar">Contribua financeiramente para manter nossos projetos de resgate e cuidado.</p>
                <Link className='bnt-acao'>Doar Agora</Link>
            </div>
            <div className="card-ajudar">
                <img src={telefone} alt="" className="icon-ajuda" />
                <p className="title-card-ajudar">Denuncie Maus-Tratos</p>
                <p className="txt-ajudar">Ajude-nos a identificar casos de animais em situação de risco ou abandono.</p>
                <Link className='bnt-acao'>Fazer Denuncia</Link>
            </div>
            <div className="card-ajudar">
                <img src={brilho} alt="" className="icon-ajuda" />
                <p className="title-card-ajudar">Seja Voluntário</p>
                <p className="txt-ajudar">Dedique seu tempo ajudando no cuidado, socialização e adoção de animais.</p>
                <Link className='bnt-acao'>Quero Ajudar</Link>
            </div>
            <div className="card-ajudar">
                <img src={compartilhar} alt="" className="icon-ajuda" />
                <p className="title-card-ajudar">Divulgue a Causa</p>
                <p className="txt-ajudar">Compartilhe nossa missão nas redes sociais e engaje mais pessoas.</p>
                <Link className='bnt-acao'>Compartilhar</Link>
            </div>
        </div>
    </section>
  )
}

export default SectionComoJudar