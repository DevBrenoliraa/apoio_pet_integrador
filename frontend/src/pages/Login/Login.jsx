import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import logo_apoio_pet from '../../assets/logo_apoio_pet/logo_apoio_pet.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { email, senha };

        try {
            const res = await fetch('http://localhost:3333/api/usuarios/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("usuario", JSON.stringify(data.usuario));
                navigate('/'); 
            } else {
                alert(data.message || "Erro ao fazer login.");
            }
        } catch (error) {
            console.log(error);
            alert("Erro no servidor.");
        }
    };

    return (
        <div className="container-login">
            <div className="content-login">

                <div className="logo-apoio-pet">
                    <img src={logo_apoio_pet} className="img-logo" alt="logo" />
                    <p className="txt-logo">Apoio Pet</p>
                </div>

                <form className="form-login" onSubmit={handleSubmit}>
                    <p className="title-login">Login</p>

                    <div className="input-login">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-login">
                        <label>Senha:</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-login">
                        Entrar
                    </button>

                    <p className="link-login">
                        Não tem conta? <a href="/cadastro/usuario" className='link-cadastro'>Cadastre-se</a>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default Login;
