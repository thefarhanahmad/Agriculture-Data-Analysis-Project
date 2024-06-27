
import { aggregateDataByYear } from '../utils/dataProcessing';
import '../App.css';

const MaxMinProductionTable = () => {
  const data = aggregateDataByYear();

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum
            Production in that Year</th>
            <th>Crop with Minimum
            Production in that Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.cropWithMaxProduction}</td>
              <td>{item.cropWithMinProduction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaxMinProductionTable;
