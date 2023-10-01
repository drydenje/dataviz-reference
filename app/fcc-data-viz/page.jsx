'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './page.module.css';
import weather_data from './weather_data.json';

import {
  //   // timeParse,
  //   select,
  //   line,
  //   curveCardinal,
  //   scaleLinear,
  //   axisBottom,
  //   axisLeft,
  scaleBand,
  scaleLinear,
  max,
} from 'd3';

// const width = 960;
const width = '100vw';
const height = 500;

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const mydata = weather_data.map((day) => {
      const { date, temperatureHigh } = day;
      return {
        date,
        temp: temperatureHigh,
      };
    });
    setData(mydata);
    // console.log('data:', data);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const yScale = scaleBand()
    .domain(data.map((d) => d.date))
    .range([0, height]);
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.temp)])
    .range([0, width]);

  return (
    <main>
      <h1>Free Code Camp Data Viz</h1>
      <svg
        id="chart"
        width={width}
        height={height}
        style={{ border: '3px solid black' }}
      >
        {data.map((d) => (
          <rect
            key={d.date}
            x={0}
            y={yScale(d.date)}
            width={xScale(d.temp)}
            height={yScale.bandwidth()}
          />
        ))}
      </svg>
    </main>
  );
}
