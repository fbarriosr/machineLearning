
var ctx = document.getElementById('barType1');


$("#simular").click(function() {
  dato = $('#dato').val()
  if (dato == 0){
    console.log('a')
  }else{
    console.log('b')
  }
  
  updateGrafico(lineChart)
  $('#v1').text((Math.floor(Math.random() * 1000000) + -10))
  $('#v2').text((Math.floor(Math.random() * 10000) + -10))
});


var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    data: [0, 59, 75, 20, 20, 55, 40],
    labels: [],
    backgroundColor: [
                'transparent'],
    borderColor: 'white',
    pointBackgroundColor: 'white',
    pointRadius: 5,
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
              labelString: 'Date',
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
              labelString: 'Date',
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
function updateGrafico(chart) {
    chart.data = {
                  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
                  datasets: [{
                    data: [ Math.floor(Math.random() * 100) + -10, 
                            Math.floor(Math.random() * 100) + -10,
                            Math.floor(Math.random() * 100) + -10, 
                            Math.floor(Math.random() * 100) + -10,
                            Math.floor(Math.random() * 100) + -10, 
                            Math.floor(Math.random() * 100) + -10,
                            Math.floor(Math.random() * 100) + -10],
                    labels: [],
                    backgroundColor: [
                                'transparent'],
                    borderColor: 'white',
                    pointBackgroundColor: 'white',
                    pointRadius: 5,
                    fontSize: '18'
                  }]
                };
    chart.update();
}

var lineChart = new Chart(ctx, {
    type: 'line',
    data: speedData,
    options: chartOptions
});


