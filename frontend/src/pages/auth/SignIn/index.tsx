import { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSharedData } from '../../../hooks/useSharedData';
import { Container, FormContainer } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onSignIn } = useSharedData();
  const navigate = useNavigate();

  async function handleSignIn(e: any) {
    e.preventDefault();
    const signInResponse = await onSignIn({
      email,
      password,
    });
    console.log({ signInResponse });
    if (signInResponse) {
      navigate('/', { replace: true });
    }
  }
  return (
    <Container>
      <div className="hero">
        <h1>Bem vindo ao assistente de viagens </h1>
        <h3>Entre na sua conta para ter acesso a todas as funcionalidades</h3>
      </div>
      <FormContainer>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSignIn}>Entrar</button>
      </FormContainer>
      <Link to={'/sign-up'}>Criar Conta</Link>
    </Container>
  );
}
