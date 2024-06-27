
import { dataset, DatasetEntry } from '../data/dataset';

interface AggregatedData {
  year: string;
  cropWithMaxProduction: string;
  cropWithMinProduction: string;
}

interface AverageData {
  cropName: string;
  averageYield: number;
  averageCultivationArea: number;
}

export const aggregateDataByYear = (): AggregatedData[] => {
  const yearData: { [key: string]: { [key: string]: number } } = {};

  dataset.forEach((entry: DatasetEntry) => {
    const year = entry.Year;
    const cropName = entry["Crop Name"];
    const production = parseFloat(entry["Crop Production (UOM:t(Tonnes))"].toString() || "0");

    if (!yearData[year]) {
      yearData[year] = {};
    }

    if (!yearData[year][cropName]) {
      yearData[year][cropName] = 0;
    }

    yearData[year][cropName] += production;
  });

  const result: AggregatedData[] = [];

  Object.keys(yearData).forEach((year) => {
    const crops = Object.keys(yearData[year]);
    const maxCrop = crops.reduce((a, b) => yearData[year][a] > yearData[year][b] ? a : b);
    const minCrop = crops.reduce((a, b) => yearData[year][a] < yearData[year][b] ? a : b);

    result.push({
      year,
      cropWithMaxProduction: maxCrop,
      cropWithMinProduction: minCrop,
    });
  });

  return result;
};

export const calculateAverages = (): AverageData[] => {
  const cropData: { [key: string]: { totalYield: number, totalArea: number, count: number } } = {};

  dataset.forEach((entry: DatasetEntry) => {
    const cropName = entry["Crop Name"];
    const yieldValue = parseFloat(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"].toString() || "0");
    const area = parseFloat(entry["Area Under Cultivation (UOM:Ha(Hectares))"].toString() || "0");

    if (!cropData[cropName]) {
      cropData[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    cropData[cropName].totalYield += yieldValue;
    cropData[cropName].totalArea += area;
    cropData[cropName].count += 1;
  });

  const result: AverageData[] = [];

  Object.keys(cropData).forEach((cropName) => {
    const data = cropData[cropName];
    result.push({
      cropName,
      averageYield: data.totalYield / data.count,
      averageCultivationArea: data.totalArea / data.count,
    });
  });

  return result;
};
