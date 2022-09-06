import React from "react";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend, Tooltip);

export default function Daughnut() {
  const data = {
    labels: [
      "Pending",
      "Processing",
      "Ready to Deliver",
      "Delivered",
      "Returned",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 30, 100, 100, 15],
        backgroundColor: [
          "#6c757d",
          "#ffc107",
          "#20c997",
          "#0d6efd",
          "#dc3545",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
}
