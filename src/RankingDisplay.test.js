import { render, screen } from '@testing-library/react';
import RankingDisplay from './components/RankingDisplay';

test('renders text ok', () => {
  render(<RankingDisplay title="hola mundo" fullText="mundo"ranking = {[{word: "juan",ocurrences:"1"}] } />);
  const linkElement = screen.getByText(/hola mundo/i);
  expect(linkElement).toBeInTheDocument();
});
