import React from "react";
import "./index.css";

const RankingDisplay = ({ title, fullText, ranking = [] }) => {
  if (!ranking) return;
  return (
    <div className="ranking-container" key="r-container">
      <h2>Texto:</h2>
      <h2>{title}</h2>
      <p>{fullText}</p>
      <h3>Ranking de palabras:</h3>

      <div>
        <table key="table-1">
        <thead> 
          <tr>
            <th>Palabra</th>
            <th>Ocurencias</th>
          </tr>
          </thead> 
          <tbody>
          {ranking.map((element,i) => (
            <tr key={`tr-${i}`}>
              <td>{element.word}</td>
              <td>{element.ocurrences}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingDisplay;
