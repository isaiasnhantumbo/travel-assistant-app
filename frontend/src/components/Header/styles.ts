import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background: #1e213a;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 16px;
  button{
    padding:8px 16px;
    &:hover{
      cursor:pointer
    }
  }
  h1 {
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;
