import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// import pata from '../../assets/svg/pata.svg';
// import beagle from '../../assets/animais/beagle.png';
// import golden from '../../assets/animais/golden.png';
// import persa from '../../assets/animais/persa.png';

// const imagens = {
//     'beagle.png': beagle,
//     'golden.png': golden,
//     'persa.png': persa,
// };

const SectionAnimais = () => {
    const [animais, setAnimais] = useState([]);

    const buscarAnimais = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/animais');

            if (!res.ok) {
                throw new Error("Erro na requisição.");
            }

            const data = await res.json();
            setAnimais(data.animais);
        } catch (error) {
            console.log(`Erro ao buscar animais: ${error}.`);
        }
    };

    useEffect(() => {
        buscarAnimais();
    }, []);

    return (
        <section id="adotar">
            <h1 className="title-adotar">
                Conheça quem está <span> esperando por você.</span>
            </h1>
            <p className="description-adotar">
                Estes são alguns dos animais que estão prontos para encontrar um lar <br /> cheio de amor.
            </p>
            <div className="cards-animais-adotar">
                {animais.slice(0, 3).map((animal) => (
                    <div key={animal.id} className="card-animal-adotar">
                        <img
                            src={imagens[animal.imagem]}
                            alt={animal.nome}
                            className="img-card-animal"
                        />
                        <div className="nome-raca-animal">
                            <div className="nome-raca">
                                <h2 className="nome-animal">{animal.nome}</h2>
                                <p className="raca-animal">{animal.raca}</p>
                            </div>
                            <div className="especie-animal-text">
                                <p className="especie-animal">
                                    <img src={pata} alt="ícone pata" />
                                    {animal.especie}
                                </p>
                            </div>
                        </div>
                        <p className="description-animal">{animal.descricao}</p>
                    </div>
                ))}
            </div>
            <Link to="" className='btn-animais'>Ver todos os animais</Link>
        </section>
    );
};

export default SectionAnimais;
