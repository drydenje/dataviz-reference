'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './page.module.css';
import weather_data from './weather_data.json';
// import {
//   // timeParse,
//   select,
//   line,
//   curveCardinal,
//   scaleLinear,
//   axisBottom,
//   axisLeft,
// } from 'd3';

// const width = 960;
// const height = 500;

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(weather_data);
    console.log('data:', data);
  }, [data]);

  return (
    <main>
      <h1>Free Code Camp Data Viz</h1>
      <div>Data is {data ? 'loaded' : 'loading'}</div>
    </main>
  );
}
