import React from "react";
import Chart from "chart.js";
import axios from "axios";

export default function BarChart() {
  //var TotalPostMaterias=[{Subject_name:'mater0a', TotalPosts:'50'}]

  const TotalPostMaterias = [];

  let Nmaterias = [];

  let TotalM = [];

  function llenarDatos() {
    TotalPostMaterias.map((materias, i) => {
      materias.map((data) => {
        Nmaterias.push(data.materia);
        TotalM.push(data.TotalPosts);
      });
    });
  }

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/bar")
      .then((response) => {
        TotalPostMaterias.push(response.data);
        llenarDatos();
        let config = {
          type: "bar",
          data: {
            labels: Nmaterias,
            datasets: [
              {
                label: new Date().getFullYear(),
                backgroundColor: "#3182CE",
                borderColor: "#3182CE",
                data: TotalM,
                fill: false,
                barThickness: 8,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Orders Chart",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            legend: {
              labels: {
                fontColor: "rgba(0,0,0,.4)",
              },
              align: "end",
              position: "bottom",
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                  gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Value",
                  },
                  gridLines: {
                    borderDash: [2],
                    drawBorder: false,
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.2)",
                    zeroLineColor: "rgba(33, 37, 41, 0.15)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
            },
          },
        };

        let ctx = document.getElementById("bar-chart").getContext("2d");
        window.myBar = new Chart(ctx, config);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="w-full xl:w-100 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                  Actividad
                </h6>
                <h2 className="text-gray-800 text-xl font-semibold">
                  Total de post por materia
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative" style={{ height: "350px" }}>
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
