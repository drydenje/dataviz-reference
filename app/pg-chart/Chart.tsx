import React, { useState } from 'react';
import { scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { Translate } from '@/src/svg/Translate';
import { LeftAxis, BottomAxis } from '@/src/svg/Axis';
import { Datum, Pos, Layout } from '@/src/svg/utils';

export const Chart: React.FC<{
  data: Datum[];
}> = ({ data }) => {
  const viewBoxWidth = 800;
  const viewBoxHeight = 400;
  const paddingX = 6;
  const paddingY = 4;
  const bottomAxisHeight = 30;
  const leftAxisWidth = 50;
  const bodyHeight = viewBoxHeight - bottomAxisHeight - 2 * paddingY;
  const bodyWidth = viewBoxWidth - leftAxisWidth - 2 * paddingX;
  const leftAxis: Layout = {
    pos: {
      x: paddingX,
      y: paddingY,
    },
    size: {
      width: leftAxisWidth,
      height: bodyHeight,
    },
  };
  const bottomAxis: Layout = {
    pos: {
      x: paddingX + leftAxisWidth,
      y: paddingY + bodyHeight,
    },
    size: {
      width: bodyWidth,
      height: bottomAxisHeight,
    },
  };
  const body: Layout = {
    pos: {
      x: leftAxis.pos.x + leftAxisWidth,
      y: paddingY,
    },
    size: {
      width: bodyWidth,
      height: bodyHeight,
    },
  };

  // d3 scales map from your data domain to another domain (in this case, our chart size).
  const xExtent = extent(data, (d) => Date.parse(d.date));
  const yExtent = extent(data, (d) => d.temperatureHigh);
  if (
    xExtent[0] == null ||
    xExtent[1] == null ||
    yExtent[0] == null ||
    yExtent[1] == null
  ) {
    return <div>insufficient data available</div>;
  }

  const xScale = scaleTime().domain(xExtent).range([0, body.size.width]);
  const yScale = scaleLinear().domain(yExtent).range([body.size.height, 0]);

  return (
    <svg
      width="100%"
      height="400"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    >
      <Translate {...body.pos}>chart body omitted</Translate>
      <Translate {...leftAxis.pos}>
        <LeftAxis scale={yScale} {...leftAxis.size} />
      </Translate>
      <Translate {...bottomAxis.pos}>
        <BottomAxis scale={xScale} {...bottomAxis.size} />
      </Translate>
    </svg>
  );
};
