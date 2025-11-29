import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './styles.css'

import logo_apoio_pet from '../../assets/logo_apoio_pet/logo_apoio_pet.png';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { nome, email, senha };

        try {
            const res = await fetch('http://localhost:3333/api/usuarios/cadastro', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await res.json();
                alert(`Cadastro realizado com sucesso.`);
                navigate('/login/usuario');
            } else {
                alert(`Erro ao cadastrar novo usuário.`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-cadastro">
            <div className="content-cadastro">
                <div className="logo-apoio-pet">
                    <img src={logo_apoio_pet} alt="logo-apoio-pet" className="img-logo" />
                    <p className="txt-logo">Apoio Pet</p>
                </div>

                <form className="inputs-cadastro" onSubmit={handleSubmit}>
                    <p className="title-cadastro">Crie sua conta</p>

                    <div className="input-cadastro">
                        <label>Nome:</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="input-cadastro">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-cadastro">
                        <label>Senha:</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-cadastro">
                        Cadastrar
                    </button>

                    <p className="link-cadastro">
                        Já tem uma conta? <Link to="/login/usuario" className='link-entrar'>Entrar</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Cadastro
