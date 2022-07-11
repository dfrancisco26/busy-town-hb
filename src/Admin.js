import React from 'react';
import MyTable from './MyTable';
import MyCharts from './MyCharts';
export default function Admin() {
  return (
    <div className="boring">Admin
      <div className="charts">Charts
        <MyCharts />
        <MyTable />
      </div>

    </div>
  );
}
