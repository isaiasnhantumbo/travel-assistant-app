import styled from 'styled-components';

export const Container = styled.div`
 width: 8.25rem; 
  height: 7rem;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.125rem 1.375rem;
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
    display: flex;
    gap: 1.125rem;
    flex-direction: row;
  }
  .temperatureValueContainer {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
`;
export const TemperatureValue = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  color:#A09FB1;
`;
