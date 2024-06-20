import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { useSharedData } from '../../../hooks/useSharedData';
import { Container, FormContainer } from './styles';

const signUpForm = z.object({
  email: z.string().email().min(1, 'Email obrigatorio!'),
  password: z.string().min(1, 'Password obrigatoria!'),
  name: z.string().min(1, 'Nome obrigatorio!'),
});
export type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });
  const { onSignUp, onSignIn } = useSharedData();
  const navigate = useNavigate();
  async function handleSignUp(data: SignUpForm) {
    try {
      const signUpResponse = await onSignUp(data);
      if (!signUpResponse) {
        toast.error('Ocorreu um erro ao criar conta!');
        return;
      }
      const signInResponse = await onSignIn({
        email: data.email,
        password: data.password,
      });
      console.log({ signInResponse });
      if (signInResponse) {
        toast.success('Sucesso!');
        navigate('/', { replace: true });
      } else {
        toast.error('Ocorreu um erro ao entrar na conta');
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
      <FormContainer onSubmit={handleSubmit(handleSignUp)}>
        <input type="text" placeholder="Nome" {...register('name')} />
        {errors?.name?.message && <span>{errors?.name?.message}</span>}
        <input type="email" placeholder="Email" {...register('email')} />
        {errors?.email?.message && <span>{errors?.email?.message}</span>}
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        {errors?.password?.message && <span>{errors?.password?.message}</span>}
        <button disabled={isSubmitting} type="submit">
          Criar conta
        </button>
      </FormContainer>
      <Link to={'/sign-in'}>Entrar</Link>
    </Container>
  );
}
