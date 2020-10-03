import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(0, '03 Sep, 2020', 'Attic', 'Check for leaks and storm damage'),
  createData(1, '10 Aug, 2020', 'Kitchen', 'Clean out under the stove'),
  createData(2, '25 Jun, 2020', 'Exterior', 'Added solar panels to roof'),
  createData(3, '3 Jun, 2020', 'Pool', 'Vaccuum pool, change filters, and cover for winter'),
  createData(4, '14 May, 2020', 'Bedroom', 'Carpets steam cleaned'),
];

export default function Orders() {

  return (
    <React.Fragment>
      <Title>Tasks Completed</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Task</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
