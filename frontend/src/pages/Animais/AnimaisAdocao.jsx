import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // importa o Link
import HeaderComponent from "../../components/header/HeaderComponent.jsx";
import FooterComponent from "../../components/footer/FooterComponent.jsx";
import "./styles.css";

import pata from "../../assets/svg/pata.svg";

import luna from "../../assets/animais/luna.png";
import max from "../../assets/animais/max.png";
import nina from "../../assets/animais/nina.png";
import ralph from "../../assets/animais/ralph.png";
import sofia from "../../assets/animais/sofia.png";
import thor from "../../assets/animais/thor.png";

const imagens = {
  "luna.png": luna,
  "max.png": max,
  "nina.png": nina,
  "ralph.png": ralph,
  "sofia.png": sofia,
  "thor.png": thor,
};

const API_URL = "http://localhost:3333";

const AnimaisAdocao = () => {
  const [animais, setAnimais] = useState([]);
  const token = localStorage.getItem("token");

  const buscarAnimais = async () => {
    try {
      const res = await fetch(`${API_URL}/api/animais`);
      if (!res.ok) throw new Error("Erro ao buscar animais.");

      const data = await res.json();
      setAnimais(data.animais || []);
    } catch (error) {
      console.error("Erro ao carregar animais:", error);
    }
  };

  const adotarAnimal = async (id) => {
    if (!token) {
      alert("Você precisa estar logado para adotar.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/animais/${id}/adotar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      alert(data.message || "Erro na requisição");

      if (res.ok) {
        buscarAnimais();
      }
    } catch (error) {
      console.error("Erro ao adotar:", error);
    }
  };

  useEffect(() => {
    buscarAnimais();
  }, []);

  return (
    <>
      <HeaderComponent />

      <main className="adoption-main">
        <section id="adoption" className="adoption-section">
          <h1 className="adoption-title">
            Animais disponíveis para <span>Adoção</span>
          </h1>

          <p className="adoption-subtitle">
            Encontre seu novo melhor amigo! Todos os nossos animais estão saudáveis e
            prontos para um lar amoroso.
          </p>

          {/* Link para voltar para a Home */}
          <div className="back-home">
            <Link to="/" className="back-home-link">
              ← Voltar para a Home
            </Link>
          </div>

          <div className="adoption-cards">
            {animais.map((animal) => (
              <div key={animal.id} className="adoption-card">
                <img
                  src={imagens[animal.imagem] || animal.imagem}
                  alt={animal.nome}
                  className="adoption-card-image"
                />

                <div className="adoption-info">
                  <div>
                    <h2 className="adoption-name">{animal.nome}</h2>
                    <p className="adoption-breed">{animal.raca}</p>
                  </div>

                  <p className="adoption-species">
                    <img src={pata} alt="" />
                    {animal.tipo}
                  </p>
                </div>

                <p className="adoption-description">{animal.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
};

export default AnimaisAdocao;
