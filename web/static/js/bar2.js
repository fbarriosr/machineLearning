

var ctx1 = document.getElementById('barType21');
var ctx2 = document.getElementById('barType22');
var ctx3 = document.getElementById('barType23');
var ctx4 = document.getElementById('barType24');
var ctx5 = document.getElementById('barType25');
var ctx6 = document.getElementById('barType26');

function updateGrafico(chart, x, y , y2) {

  var arr = new Array(y.length - y2.length);
  y2 = arr.concat(y2)
    chart.data = {
                  labels: x,
                  datasets: [
                    {
                      data: y,
                      labels: [],
                      backgroundColor: [
                                  'transparent'],
                      borderColor: 'white',
                      pointBackgroundColor: 'white',
                      pointRadius: 1,
                      fontSize: '18'
                    },
                    {
                      data: y2,
                      labels: [],
                      backgroundColor: [
                                  'transparent'],
                      borderColor: 'red',
                      pointBackgroundColor: 'red',
                      pointRadius: 1,
                      fontSize: '18'
                    },

                  ]
                };
    chart.update();
}





var speedData = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [{
    data: [20000, 40000, 20000, 80000, 30000, 50000],
    labels: [],
    backgroundColor: [
                'transparent'],
    borderColor: 'white',
    pointBackgroundColor: 'white',
    pointRadius: 1,
    fontSize: '18'
  }]
};
 
var chartOptions = {
  responsive: true,
    scales: {
        xAxes: [{
            display: true,
            color: "white",
            gridLines: {
              display: true,
              color: "#e0e0e0",
            },
            scaleLabel: {
              display: true,
              labelString: 'Fecha',
              fontColor: 'white',
              fontSize:20,
            },
            ticks: {
                fontColor: 'white'
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: "#e0e0e0",
            },
            scaleLabel: {
              display: true,
              labelString: 'Lt',
              fontColor: 'white',
              fontSize:20,
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 200,
                fontColor: 'white'
            },
            
        }]
    },
  legend: {
    display: false,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'white'
    }
  }
};


var lineChart1 = new Chart(ctx1, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

var lineChart2 = new Chart(ctx2, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

var lineChart3 = new Chart(ctx3, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

var lineChart4 = new Chart(ctx4, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

var lineChart5 = new Chart(ctx5, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

var lineChart6 = new Chart(ctx6, {
    type: 'line',
    data: speedData,
    options: chartOptions
});




$("#Arima").click(function() {
  dato = $('#horizonte').val();
  if (dato == 0){
    dato =  $('#horizonte').attr('placeholder');
    console.log('vacio', dato);
  }else{
    console.log('dato', dato);
  }

  url = 'http://127.0.0.1:9000/arima'

  $.get(url, { 'horizonte': dato}).done(function(returned_data) {
    $(".grafo").css('visibility', 'visible');
    console.log('res:', returned_data)
    updateGrafico(lineChart1,  returned_data.fecha,returned_data.observados_automovil , returned_data.predicciones_automovil )
    updateGrafico(lineChart2,  returned_data.fecha,returned_data.observados_bus , returned_data.predicciones_bus )
    updateGrafico(lineChart3,  returned_data.fecha,returned_data.observados_camion , returned_data.predicciones_camion )
    updateGrafico(lineChart4,  returned_data.fecha,returned_data.observados_camioneta, returned_data.predicciones_camioneta )
    updateGrafico(lineChart5,  returned_data.fecha,returned_data.observados_minibus , returned_data.predicciones_minibus )
    updateGrafico(lineChart6,  returned_data.fecha,returned_data.observados_statiowagon , returned_data.predicciones_stationwagon )
  });

});


$("#HoltWinter").click(function() {
  dato = $('#horizonte').val();
  if (dato == 0){
    dato =  $('#horizonte').attr('placeholder');
    console.log('vacio', dato);
  }else{
    console.log('dato', dato);
  }

  url = 'http://127.0.0.1:9000/holtwinter'

  $.get(url, { 'horizonte': dato}).done(function(returned_data) {
    $(".grafo").css('visibility', 'visible');
    console.log('res:', returned_data)
    updateGrafico(lineChart1,  returned_data.fecha,returned_data.observados_automovil , returned_data.predicciones_automovil )
    updateGrafico(lineChart2,  returned_data.fecha,returned_data.observados_bus , returned_data.predicciones_bus )
    updateGrafico(lineChart3,  returned_data.fecha,returned_data.observados_camion , returned_data.predicciones_camion )
    updateGrafico(lineChart4,  returned_data.fecha,returned_data.observados_camioneta, returned_data.predicciones_camioneta )
    updateGrafico(lineChart5,  returned_data.fecha,returned_data.observados_minibus , returned_data.predicciones_minibus )
    updateGrafico(lineChart6,  returned_data.fecha,returned_data.observados_statiowagon , returned_data.predicciones_stationwagon )
  });

});

