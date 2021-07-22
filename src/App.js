import { useEffect, useState } from "react";
import RankingDisplay from "./components/RankingDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = () => {
    fetch("http://localhost:8081/words/ranking")
      .then((res) => res.json())
      .then(
        (result) => {
          result.ranking !== undefined ? setData(result) : setError(true);
        },
        (error) => {
          setData([]);
          setError(true);
        }
      );
  };

  const loadData = () => {
    setData(getData());
  };

  useEffect(() => {
    if (data === null) loadData();
  }, [data]);

  return (
    <div className="App">
      <div>
        <h1 className="title">Word Counter (Desafío Banco Internacional)</h1>
        <p>Ranking de las palabras con mayor ocurrencia</p>
        <button onClick={getData} className="btn" title="Actualizar">
          <span>&#x21bb;</span>
        </button>
      </div>
      {!error ? (
        <RankingDisplay {...data} />
      ) : (
        <div className="error">Ha ocurrido un error</div>
      )}
    </div>
  );
}

export default App;
