'use client';
import { useEffect } from 'react';
import * as d3 from 'd3';

const data = {
  name: 'A',
  children: [
    { name: 'C', children: [{ name: 'H' }, { name: 'I' }] },
    { name: 'D', children: [{ name: 'F' }, { name: 'E' }] },
    { name: 'B', children: [{ name: 'J' }, { name: 'K' }] },
  ],
};

const root = d3
  .hierarchy(data)
  .sort(
    (a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name)
  );

const width = 30;
const height = 60;

const treeLayout = d3
  .tree()
  // .size([580, 80])
  .nodeSize([width, height])
  .separation((a, b) => a.depth);

const drawTree = () => {
  treeLayout(root);

  const svg = d3.select('#treechart');
  svg
    .select('g.links')
    .selectAll('line.link')
    .data(root.links())
    .enter()
    .append('line')
    .attr('x1', function (d) {
      return d.source.x;
    })
    .attr('y1', function (d) {
      return d.source.y;
    })
    .attr('x2', function (d) {
      return d.target.x;
    })
    .attr('y2', function (d) {
      return d.target.y;
    })
    .attr('stroke', 'darkgray')
    .attr('stroke-width', 2);

  svg
    .select('g.nodes')
    .selectAll('circle.node')
    .data(root.descendants())
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return d.x;
    })
    .attr('cy', function (d) {
      return d.y;
    })
    .attr('r', 10)
    .attr('fill', 'lightblue')
    .attr('stroke', 'darkgray')
    .attr('stroke-width', 1);

  // draw labels
  svg
    .select('g.labels')
    .selectAll('text.label')
    .data(root.descendants())
    .enter()
    .append('text')
    .classed('label', true)
    .style('fill', 'gray')
    .attr('x', function (d) {
      return d.x - 5;
    })
    .attr('y', function (d) {
      return d.y + 5;
    })
    .html((d) => d.data.name);
};

const Page = () => {
  useEffect(() => {
    drawTree();
  }, []);
  return (
    <div>
      <h1>Tree Chart</h1>
      <svg id="treechart" width="600" height="900">
        <g transform="translate(290,30)">
          <g className="links"></g>
          <g className="nodes"></g>
        </g>
      </svg>
    </div>
  );
};

export default Page;
