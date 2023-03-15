import React from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';
import millify from 'millify';

class CoinOverviewChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: "BTC",
        data: [`${(24405.218612957735).toFixed(6)}`, `${(24612.66396704001).toFixed(6)}`, `${(24809.534701836285).toFixed(6)}`, `${(25676.439795124556).toFixed(6)}`, `${(25790.648722647107).toFixed(6)}`]
      }],
      options: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },  
        labels: ['1', '2', '3', '4', '5'],
        xaxis: {
          type: 'datetime',
        },
        legend: {
          horizontalAlign: 'left'
        },
        colors: ['#c99d66']
      },
      
    };
  }



  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }

}
export default CoinOverviewChart;
