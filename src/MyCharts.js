import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

const data = [
  { quarter: 1, earnings: 72000 },
  { quarter: 2, earnings: 64000 },
  { quarter: 3, earnings: 63000 },
  { quarter: 4, earnings: 96000 }
];
export default function MyCharts() {
  return (
    <VictoryChart
    // domainPadding will add space to each side of VictoryLine to
    // prevent it from overlapping the axis
      domainPadding={20}
    >
      <VictoryAxis
      // tickValues specifies both the number of ticks and where
      // they are placed on the axis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
      // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryLine
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>

  );
}