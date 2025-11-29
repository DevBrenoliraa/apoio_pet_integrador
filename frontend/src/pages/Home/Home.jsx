import './styles.css'

import coracao from '../../assets/svg/coracao.svg'
import HeaderComponent from '../../components/header/HeaderComponent'

const Home = () => {
    return (
        <main className="container-home">
            <HeaderComponent/>
            <section id="inicio">
                <div className="text-inicio">
                    <h1 className="title-inicio">
                        Juntos por um futuro melhor para
                        <span> nossos pets</span>
                    </h1>
                    <p className="subtitle-inicio">
                        Uma iniciativa dedicada ao amparo de animais abandonados,
                        promovendo engajamento social e controle de zoonoses em nossa comunidade.
                    </p>
                    <div className="btns-inicio">
                        <div className="btn-ajudar">
                            <a href="#como_ajudar">
                                <img src={coracao} />
                                Quero ajudar
                            </a>
                        </div>
                        <div className="btn-saiba-mais">
                            <a href="#sobre">
                                Saiba mais
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home