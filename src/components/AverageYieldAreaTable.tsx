
import { calculateAverages } from '../utils/dataProcessing';
import '../App.css';

const AverageYieldAreaTable = () => {
  const data = calculateAverages();

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Crop Name</th>
            <th>Average Yield of the
              Crop between
              1950-2020</th>
            <th>Average Cultivation Area
              of the Crop between
              1950-2020</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.cropName}>
              <td>{item.cropName}</td>
              <td>{item.averageYield.toFixed(3)}</td>
              <td>{item.averageCultivationArea.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AverageYieldAreaTable;
