"use client";

import { useEffect, useRef, useState } from "react";
import { chartColors } from "./ChartjsConfig";
import {
  ArcElement,
  Chart,
  DoughnutController,
  TimeScale,
  Tooltip,
} from "chart.js";
import { tailwindConfig } from "@/app/utils/Utils";

interface DoughnutChartProps {
  data: any;
  width: number;
  height: number;
}

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  width,
  height,
}) => {
  const [chart, setChart] = useState(null);
  const canvas = useRef(null);
  const legend = useRef(null);
  const {
    tooltipTitleColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
  } = chartColors;

  useEffect(() => {
    const ctx: any = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const newChart: any = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutout: "80%",
        layout: {
          padding: 24,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleColor: tooltipTitleColor.dark,
            bodyColor: tooltipBodyColor.dark,
            backgroundColor: tooltipBgColor.dark,
            borderColor: tooltipBorderColor.dark,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c: any, args, options) {
            const ul: any = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item: any) => {
              const li = document.createElement("li");
              li.style.margin = tailwindConfig().theme.margin[1];
              // Button element
              const button = document.createElement("button");
              button.classList.add(
                "btn-xs",
                "bg-white",
                "dark:bg-slate-800",
                "text-slate-500",
                "dark:text-slate-400",
                "border",
                "border-slate-600",
                "shadow-md"
              );
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.toggleDataVisibility(item.index);
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[2];
              box.style.height = tailwindConfig().theme.height[2];
              box.style.backgroundColor = item.fillStyle;
              box.style.borderRadius = tailwindConfig().theme.borderRadius.sm;
              box.style.marginRight = tailwindConfig().theme.margin[1];
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.style.display = "flex";
              label.style.alignItems = "center";
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    setChart(newChart);
    return () => newChart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grow flex flex-col justify-center">
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <div className="px-5 pt-2 pb-6">
        <ul ref={legend} className="flex flex-wrap justify-center -m-1"></ul>
      </div>
    </div>
  );
};

export default DoughnutChart;
