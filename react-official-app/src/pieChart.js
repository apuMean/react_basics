import React,{Component} from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

export default class PieChart extends Component {
  render() {
    var style={
      marginLeft:150
    }
    return (
      <div style={style}>
    <Chart
        chartTitle="DonutChart"
          chartType="PieChart"
          data={[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}
          options={{ "title": "Density of Precious Metals, in g/cm^3", "bar": { "groupWidth": "95%" }, "legend": { "position": "none" } }}
          graph_id="ScatterChart"
          width="100%"
          height="300px"
          legend_toggle
        /> 
      </div>
    );
  }
}

