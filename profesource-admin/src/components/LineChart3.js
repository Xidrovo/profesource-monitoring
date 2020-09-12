import React from "react";
import Chart from "chart.js";
import axios from "axios";

export default function LineChart3() {
  //var TotalUsuariosNuevos=[{Subject_name:'Dawm', usename:'fponce', Total:'20'}]

  const [TotalUsuariosMateria, setTotalUsuariosMateria] = React.useState([])

  let Subject= []
  
  let MaxiUser=[]

  function llenarDatos(){
    TotalUsuariosMateria.map(info=>{
      Subject.push(info.Materia);
      MaxiUser.push(info.Usuarios);
    })
  }

  React.useEffect(() => {
    axios
    .get('http://localhost:3000/api/admin/linechart2')
    .then((response)=>{
      setTotalUsuariosMateria(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    llenarDatos();
    var config = {
      type: "line",
      data: {
        labels: Subject,
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#3182CE",
            borderColor: "#3182CE",
            data: MaxiUser,
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white"
          },
          align: "end",
          position: "bottom"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)"
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white"
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)"
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white"
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    var ctx = document.getElementById("line-chart3").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="w-full xl:w-100 mb-12 xl:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-gray-200 mb-1 text-xs font-semibold">
                  Actividad
                </h6>
                <h2 className="text-white text-xl font-semibold">
                  Total de usuarios por materia
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative" style={{ height: "350px" }}>
              <canvas id="line-chart3"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
