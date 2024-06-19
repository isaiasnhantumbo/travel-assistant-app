import ContentLoader from 'react-content-loader';
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { useSharedData } from '../../hooks/useSharedData';
import { Container } from './styles';

interface IDestinationDetailsProps {
  text: string;
  chartData: Array<{
    date: string;
    value: number;
  }>;
}

export function DestinationDetails({
  text,
  chartData,
}: IDestinationDetailsProps) {
  const { isLoggedIn } = useSharedData();
  return (
    <Container isLoggedIn={isLoggedIn}>
      <h3>{text}</h3>
      {chartData ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ContentLoader
          width={200}
          height={200}
          viewBox="0 0 200 200"
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="160" rx="0" ry="0" width="25" height="40" />
          <rect x="30" y="145" rx="0" ry="0" width="25" height="55" />
          <rect x="60" y="126" rx="0" ry="0" width="25" height="74" />
          <rect x="90" y="80" rx="0" ry="0" width="25" height="120" />
          <rect x="120" y="142" rx="0" ry="0" width="25" height="58" />
        </ContentLoader>
      )}
    </Container>
  );
}
