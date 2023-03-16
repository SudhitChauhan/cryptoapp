import React from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';
import millify from 'millify';

class CoinOverviewChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: "Crypto",
        data: this.props.data
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
        // labels: this.props.data,
        xaxis: {
          type: 'PRICE',
        },
        legend: {
          horizontalAlign: 'left'
        },
        colors: [this.props.change]
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
