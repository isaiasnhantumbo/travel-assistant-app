import { InputHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes{
  children: ReactNode;
}

export function Input({ children }: InputProps) {
  return (
    <Container>
      <h1>Input</h1>
    </Container>
  );
}
