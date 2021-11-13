import React, { useState, useEffect } from "react";
import ResourceCard from './ResourceCard';
import { FormGroup, Label, Input, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import CustomerDetailRow from '../table/CustomerDetailRow'

const CustomerListView = () => {

  const[customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/resources', {
        method: 'GET', headers: { 'Accept': 'application/json'},
    })
    .then(async response => {
        if (response.ok) {
            let res = await response.json();
            setCustomers(res);
        } else {
            const text = await response.text();
            return Promise
                    .reject(response.status + ' - '
                    + response.statusText
                    + '  --  ' + text);
        }
        })
        .catch(error => {
            console.error(error);
        });
  },[])

  return (
    <DataTable
        columns={columns}
        data={customers}
        expandableRows
        expandableRowsComponent={CustomerDetailRow}
    />
  );

}

export default CustomerListView;

const columns = [
    {
        name: 'Name',
        selector: row => row.surname + ',  ' + row.firstName,
        sortable: true
    },
    {
        name: 'Surname',
        selector: row => row.surname
    },
];
