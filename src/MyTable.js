import MaterialTable from 'material-table';
import React from 'react';
import { customers } from './services/data.js';

export default function MyTable() {
  return (
    <div>MyTable

      <MaterialTable 
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Lucky #', field: 'big_lucky_number' }
        ]}
        data={customers}
        title="Customer Data" />


    </div>
  );
}
