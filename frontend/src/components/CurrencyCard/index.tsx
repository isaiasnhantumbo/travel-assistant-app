import { useSharedData } from '../../hooks/useSharedData';
import { Container, Value } from './styles';

export function CurrencyCard() {
  const { shared, isLoggedIn } = useSharedData();
  return (
    <Container isLoggedIn={isLoggedIn}>
      <h3>Cambio</h3>

      <div className="currency-list">
        <div className="valueContainer">
          <h4>EUR</h4>
          <Value>{shared?.exchange?.rates?.EUR.toFixed(2)}</Value>
        </div>
        <div className="valueContainer">
          <h4>USD</h4>
          <Value>{shared?.exchange?.rates?.USD.toFixed(2)}</Value>
        </div>

        <div className="valueContainer">
          <h4>MZN</h4>
          <Value>{shared?.exchange?.rates?.MZN.toFixed(2)}</Value>
        </div>
        <div className="valueContainer">
          <h4>ZAR</h4>
          <Value>{shared?.exchange?.rates?.ZAR.toFixed(2)}</Value>
        </div>
      </div>
    </Container>
  );
}
