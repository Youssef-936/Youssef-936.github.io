Highcharts.chart('container', {
  chart: {
      type: 'packedbubble',
      height: '90%',
      backgroundColor: '#212529',
  },
  title: {
      text: '',
      align: 'left'
  },
  tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}</b>',
  },
  plotOptions: {
      packedbubble: {
          minSize: '30%',
          maxSize: '120%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
          },
          dataLabels: {
              enabled: true,
              useHTML: true,
              format: '<div class="centered-image"><img src="./assets/img/logo_outils/{point.name}.png"></div>',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 250
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal'
              }
          }
      }
  },
  legend: {
    itemStyle: {
        color: '#fd7e14' // Définir la couleur des boutons de la légende en blanc
    },
    itemHoverStyle: {
        color: '#ffffff' // Couleur du texte au survol
    }
},
  series: [{
      name: 'Language',
      data: [{
          name: 'PHP',
          value: 767.1
      }, {
          name: 'java',
          value: 700.7
      },
      {
          name: 'Python',
          value: 700.2
      },
      {
          name: 'CSS',
          value: 700.7
      },
      {
          name: 'HTML',
          value: 700.6
      },
      {
          name: 'SQL',
          value: 700.1
      },{
        name: 'c',
        value: 700.1
    }]
  }, {
      name: 'Framework',
      data: [{
          name: 'Laravel',
          value: 500.2
      },
      {
          name: 'Bootstrap',
          value: 500.2
      },

     ]
  }, {
      name: 'Tools',
      data: [
      {
          name: 'git',
          value: 600.5
      },
      {
          name: 'SQLserver',
          value: 700.4
      },
      {
          name: 'phpMyAdmin',
          value: 700.4
      }]
  }]
});
