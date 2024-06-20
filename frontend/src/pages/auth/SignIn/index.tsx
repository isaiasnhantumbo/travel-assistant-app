import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { useSharedData } from '../../../hooks/useSharedData';
import { Container, FormContainer } from './styles';

const signInForm = z.object({
  email: z.string().email().min(1, 'Email obrigatorio!'),
  password: z.string().min(1, 'Password obrigatoria!'),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const { onSignIn } = useSharedData();
  const navigate = useNavigate();

  async function handleSignIn(data: SignInForm) {
    try {
      const signInResponse = await onSignIn(data);
      console.log({ signInResponse });
      toast.success('Sucesso!');
      if (signInResponse) {
        navigate('/', { replace: true });
      } else {
        toast.error('Credenciais inválidas.');
      }
    } catch (error) {
      toast.error('Credenciais inválidas.');
      console.log({ error });
    }
  }
  return (
    <Container>
      <div className="hero">
        <h1>Bem vindo ao assistente de viagens </h1>
        <h3>Entre na sua conta para ter acesso a todas as funcionalidades</h3>
      </div>
      <FormContainer onSubmit={handleSubmit(handleSignIn)}>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors?.email?.message && <span>{errors?.email?.message}</span>}
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        {errors?.password?.message && <span>{errors?.password?.message}</span>}
        <button disabled={isSubmitting} type="submit">
          Entrar
        </button>
      </FormContainer>
      <Link to={'/sign-up'}>Criar Conta</Link>
    </Container>
  );
}
