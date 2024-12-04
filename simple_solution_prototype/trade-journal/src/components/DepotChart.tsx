import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

interface DepotChartProps {
  labels: string[];
  data: number[];
}

const DepotChart: React.FC<DepotChartProps> = ({ labels, data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: "Depotwert in €",
                data,
                borderColor: "#646cff",
                backgroundColor: "rgba(100, 108, 255, 0.2)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Depotentwicklung",
              },
              tooltip: {
                enabled: true,
              },
            },
            scales: {
              x: {
                type: "category",
                ticks: {
                  color: "#333",
                },
              },
              y: {
                ticks: {
                  color: "#333",
                  callback: (value) => `€${value}`,
                },
              },
            },
          },
        });
      }
    }
  }, [labels, data]);

  return <canvas ref={chartRef}></canvas>;
};

export default DepotChart;