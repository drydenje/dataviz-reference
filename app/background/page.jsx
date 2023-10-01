'use client';
import { useEffect } from 'react';
import * as d3 from 'd3';

// import Background from '@/src/background';
const width = 960;
const height = 500;

const drawChart = () => {
  const svg = d3.select('#chart');
  const xscale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, width - 50]);
  const x_axis = d3.axisTop(xscale);
  svg
    // .select('g.xaxis')
    .append('g')
    .attr('transform', 'translate(20,100)')
    .call(x_axis);
};
export default function Page() {
  useEffect(() => {
    drawChart();
  }, []);
  return (
    <div>
      <svg id="chart" width={width} height={height}>
        <g id="xaxis"></g>
      </svg>
    </div>
  );
}
