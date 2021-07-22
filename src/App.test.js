import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

jest.spyOn(window, "fetch");

const resp = {
  id: "1",
  title: "2",
  fullText: "3",
  ranking: [
    {
      word: "y",
      ocurrences: 21,
    },
  ],
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(resp),
  });
});

test("renders text and call api", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ranking de Palabras/i);
  expect(linkElement).toBeInTheDocument();
  expect(window.fetch).toHaveBeenCalledWith(
    "http://localhost:8081/words/ranking"
  );
});
