import React, { useEffect, useState } from 'react';
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
  createData(0, '03 Sep, 2020', 'Attic', 'Task here'),
  createData(1, '10 Aug, 2020', 'Kitchen', 'Task here'),
  createData(2, '25 Jun, 2020', 'Exterior', 'Solar Panels'),
  createData(3, '3 Jun, 2020', 'Pool', 'Task here'),
  createData(4, '14 May, 2020', 'Bedroom', 'Task here'),
];

export default function Orders(props) {
  const [row, setRow] = useState([]);

  useEffect(() => {
    loadTasks(); 
  },[])

  function loadTasks() {
    props.value.forEach(res => {
      // await new Promise((resolve, reject) => setTimeout(resolve, 5000));
      res.tasks.filter(e => e.isFixed === true).forEach(filter => {
        setRow(row => [...row,
          {
            id: filter._id,
            isFixed: filter.isFixed,
            taskName: filter.taskName
          }]);
        console.log('filter', filter);
      })

      // res.tasks.map(res => {
      //   console.log(res);
      //   res.filter(e => {
      //     const taskFinish = e.isFixed === true
      //     setRow(taskFinish);
      //   })
      // })
    })
  }

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
