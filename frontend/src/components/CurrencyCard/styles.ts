import styled, { css } from 'styled-components';

import { IContainerProps } from '../DestinationDetails/styles';

export const Container = styled.div<IContainerProps>`
  margin-top: 8px;
  width: 25.8rem;
  height: 7rem;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.125rem 1.375rem;
  @media (max-width: 720px) {
    width: 24.875rem;
    padding-bottom: 1rem;
  }
  h3 {
    margin-bottom: 8px;
  }
  h4 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    text-align: center;
    color: #e7e7eb;
  }
  .currency-list {
    ${(props) =>
      !props.isLoggedIn &&
      css`
        filter: blur(4px);
      `}
    display: flex;
    gap: 1.125rem;
    flex-direction: row;
  }
  .valueContainer {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    text-align: center;
  }
`;
export const Value = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  color: #a09fb1;
`;
