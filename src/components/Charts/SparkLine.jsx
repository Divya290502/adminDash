import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
class SparkLine extends React.Component {
  render() {
      return (<SparklineComponent id={this.props.id} height={this.props.height} width={this.props.width} dataSource={this.props.data} 
      // Assign the dataSource values to series of sparkline 'xName and yName'
      xName='xval' yName='yval' 
      // Assign 'Line' as type of the sparkline
      type={this.props.type}
      tooltipSettings={{visible: true, format: '${xval} : data ${yval}', trackLineSettings: {visible: true}}}>
      <Inject services={[SparklineTooltip]}/>
      </SparklineComponent>);
  }
}
export default SparkLine;