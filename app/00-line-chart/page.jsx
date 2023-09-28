'use client';
import React, { useRef, useEffect } from 'react';
import {
  // timeParse,
  select,
  line,
  curveCardinal,
  scaleLinear,
  axisBottom,
  axisLeft,
} from 'd3';
import data from './weather_data.json';

// const data = [
//   { x: 0, y: 10 },
//   { x: 1, y: 20 },
//   { x: 2, y: 15 },
//   { x: 3, y: 25 },
//   { x: 4, y: 30 },
// ];

const LineChart = () => {
  // const yAccessor = (d) => d['temperatureMax'];
  // console.log('yAccessor:', yAccessor(data[0]));
  // const parseDate = timeParse('%Y-%m-%d');
  // const xAccessor = (d) => parseDate(d['date']);
  // console.log('xAccessor:', xAccessor(data[0]));

  // refs
  const svgRef = useRef();
  console.log('LEN:', data.length);
  // draws chart
  useEffect(() => {
    const svg = select(svgRef.current);

    // scales
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 100]).range([100, 0]);

    // axes
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select('.x-axis').style('transform', 'translateY(100px)').call(xAxis);

    const yAxis = axisLeft(xScale).ticks(data.length);
    svg.select('.y-axis').style('transform', 'translateX(0px)').call(yAxis);

    const myLine = line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(curveCardinal);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', '#00bfa6');
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default function Home() {
  return (
    <main>
      <h1>Line Chart Example</h1>
      <LineChart />
    </main>
  );
  // const svgRef = useRef();

  // // draws chart
  // useEffect(() => {
  //   const svg = select(svgRef.current);

  //   // scales
  //   const xScale = scaleLinear()
  //     .domain([0, data.length - 1])
  //     .range([0, 300]);
  //   const yScale = scaleLinear().domain([0, 100]).range([100, 0]);

  //   // axes
  //   const xAxis = axisBottom(xScale).ticks(data.length);
  //   svg.select('.x-axis').style('transform', 'translateY(100px)').call(xAxis);

  //   const yAxis = axisBottom(xScale).ticks(data.length);
  //   svg.select('.y-axis').style('transform', 'translateX(0px)').call(yAxis);

  //   const myLine = line()
  //     .x((d, i) => xScale(i))
  //     .y((d) => yScale(d.y))
  //     .curve(curveCardinal);

  //   svg
  //     .selectAll('.line')
  //     .data([data])
  //     .join('path')
  //     .attr('class', 'line')
  //     .attr('d', myLine)
  //     .attr('fill', 'none')
  //     .attr('stroke', '#00bfa6');
  // }, [data]);

  // return <svg ref={svgRef}></svg>;
}
