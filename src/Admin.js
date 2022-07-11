import React from 'react';
import { VictoryChart } from 'victory';
import MyTable from './MyTable';

export default function Admin() {
  return (
    <div className="boring">Admin
      <div className="charts">Charts
        <VictoryChart />
        <MyTable />
      </div>

    </div>
  );
}
