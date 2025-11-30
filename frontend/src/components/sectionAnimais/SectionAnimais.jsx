import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import pata from '../../assets/svg/pata.svg';

import luna from '../../assets/animais/luna.png';
import max from '../../assets/animais/max.png';
import nina from '../../assets/animais/nina.png';
import ralph from '../../assets/animais/ralph.png';
import sofia from '../../assets/animais/sofia.png';
import thor from '../../assets/animais/thor.png';

const imagens = {
    luna: luna,
    "luna.png": luna,
    max: max,
    "max.png": max,
    nina: nina,
    "nina.png": nina,
    ralph: ralph,
    "ralph.png": ralph,
    sofia: sofia,
    "sofia.png": sofia,
    thor: thor,
    "thor.png": thor,
};

const SectionAnimais = () => {
    const [animais, setAnimais] = useState([]);

    const buscarAnimais = async () => {
        try {
            const res = await fetch('http://localhost:3333/api/animais');

            if (!res.ok) {
                throw new Error("Erro na requisição.");
            }

            const data = await res.json();

            if (data.animais) {
                setAnimais(data.animais);
            }
            else if (Array.isArray(data)) {
                setAnimais(data);
            } 
            else {
                console.log("Formato de resposta inesperado:", data);
            }

        } catch (error) {
            console.log(`Erro ao buscar animais: ${error}`);
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
                {animais.slice(0, 3).map((animal) => {
                    const imgKey = String(animal.imagem).toLowerCase();

                    return (
                        <div key={animal.id} className="card-animal-adotar">
                            <img
                                src={imagens[imgKey] || imagens["luna.png"]}
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
                                        {animal.tipo}
                                    </p>
                                </div>
                            </div>

                            <p className="description-animal">{animal.descricao}</p>
                        </div>
                    );
                })}
            </div>

            <Link to="/animais" className="btn-animais">
                Ver todos os animais
            </Link>
        </section>
    );
};

export default SectionAnimais;
