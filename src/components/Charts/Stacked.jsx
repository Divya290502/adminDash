import * as React from "react";
import * as ReactDOM from "react-dom";
import { StackingColumnSeries, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";
function Stacked({ height, width }) {
  return <ChartComponent id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} height={height} width={width} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ background: 'white' }}>
    <Inject services={[StackingColumnSeries, Legend, Tooltip, Category]} />
    <SeriesCollectionDirective>
      {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default Stacked;
