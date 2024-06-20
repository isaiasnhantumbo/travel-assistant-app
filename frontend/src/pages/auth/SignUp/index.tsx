import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSharedData } from '../../../hooks/useSharedData';
import { Container, FormContainer } from './styles';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { onSignUp, onSignIn } = useSharedData();
  const navigate = useNavigate();
  async function handleSignUp(e: any) {
    try {
      e.preventDefault();
      const signUpResponse = await onSignUp({
        email,
        password,
        name,
      });
      if (!signUpResponse) {
        return;
      }
      const signInResponse = await onSignIn({
        email,
        password,
      });
      console.log({ signInResponse });
      if (signInResponse) {
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <Container>
      <div className="hero">
        <h1>Bem vindo ao assistente de viagens </h1>
        <h3>Crie uma conta para ter acesso a todas as funcionalidades</h3>
      </div>
      <FormContainer>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button type="submit" onClick={handleSignUp}>
          Criar conta
        </button>
      </FormContainer>
      <Link to={'/sign-in'}>Entrar</Link>
    </Container>
  );
}
