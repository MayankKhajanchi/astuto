import React, { useState, createContext, useEffect } from "react";

import { generatePieChartData } from "../Utils";

const dataContext = createContext();
export default dataContext;

const initialState = {
  pieChartData: [
    {
      id: "ec2",
      label: "EC2",
      value: 30000,
      color: "hsl(180, 70%, 50%)",
    },
    {
      id: "rds",
      label: "RDS",
      value: 20000,
      color: "hsl(293, 70%, 50%)",
    },
    {
      id: "S3",
      label: "S3",
      value: 20000,
      color: "hsl(121, 70%, 50%)",
    },
    {
      id: "OpenSearch",
      label: "OpenSearch",
      value: 10000,
      color: "hsl(88, 70%, 50%)",
    },
    {
      id: "elastiCache",
      label: "ElastiCache",
      value: 10000,
      color: "hsl(311, 70%, 50%)",
    },
    {
      id: "others",
      label: "Others",
      value: 10000,
      color: "hsl(211, 70%, 50%)",
    },
  ],
};

export const DataProvider = ({ children }) => {
  let pieData = initialState.pieChartData;
  const [pieChartData, setPieChartData] = useState(initialState.pieChartData);
  const date = new Date();

  const [lastRun, setLastRun] = useState(
    `${date.toLocaleDateString()}  ${date.getHours()}:${date.getMinutes()}`
  );

  const refreshPieChartData = () => {
    const newData = generatePieChartData([...pieChartData]);
    pieData = newData;
    setLastRun(
      `${date.toLocaleDateString()}  ${date.getHours()}:${date.getMinutes()}`
    );
    setPieChartData(newData);
  };

  return (
    <dataContext.Provider
      value={{
        lastRun,
        pieData,
        pieChartData,
        refreshPieChartData,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
