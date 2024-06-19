import { Link } from 'react-router-dom';

import { Container, FormContainer } from './styles';

export function SignUp() {
  return (
    <Container>
      <div className="hero">
        <h1>Bem vindo ao assistente de viagens </h1>
        <h3>Crie uma conta para ter acesso a todas as funcionalidades</h3>
      </div>
      <FormContainer>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Criar conta</button>
      </FormContainer>
      <Link to={'/sign-in'}>Entrar</Link>
    </Container>
  );
}
