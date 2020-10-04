import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("May '20", 28),
  createData("June '20", 60),
  createData("July '20", 45),
  createData("Aug '20", 80),
  createData("Sep '20", 72),
  createData("Oct '20", 83),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>6-Month Trend:</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}>
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Home Value
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}