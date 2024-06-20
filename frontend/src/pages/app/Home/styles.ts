import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 12px;
  padding: 0 16px;
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const WeatherListContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 965px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const DestinationDetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 965px) {
    display: grid;
    grid-template-columns: repeat(1, 300px);
  }
`;
