import styled, { css } from 'styled-components';
export interface IContainerProps {
  isLoggedIn: boolean;
}
export const Container = styled.div<IContainerProps>`
  ${(props) =>
    !props.isLoggedIn &&
    css`
      filter: blur(4px);
    `}

  margin-top: 12px;
  width: 34.58rem;
  height: 19rem;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 1.375rem;
  text-align: center;
  gap: 1rem;
  @media (max-width: 720px) {
    width: 24.58rem;
  }
  h3 {
    margin-bottom: 8px;
    font-weight: 500;
    color: #e7e7eb;
    line-height: 19px;
  }
`;
export const Value = styled.p`
  /* filter: blur(6px); */
  font-weight: 500;
  font-size: 2rem;
  line-height: 19px;
  color: #a09fb1;
`;
