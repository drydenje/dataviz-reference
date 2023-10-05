import React, { useState } from 'react';

import { Translate } from '@/src/svg/Translate';
import { LeftAxis, BottomAxis } from '@/src/svg/Axis';

export const Chart = ({ data }) => {
  const viewBoxWidth = 800;
  const viewBoxHeight = 400;
  const paddingX = 6;
  const paddingY = 4;
  const bottomAxisHeight = 30;
  const leftAxisWidth = 50;
  const bodyHeight = viewBoxHeight - bottomAxisHeight - 2 * paddingY;
  const bodyWidth = viewBoxWidth - leftAxisWidth - 2 * paddingX;
  const leftAxis = {
    pos: {
      x: paddingX,
      y: paddingY,
    },
    size: {
      width: leftAxisWidth,
      height: bodyHeight,
    },
  };
  const bottomAxis = {
    pos: {
      x: paddingX + leftAxisWidth,
      y: paddingY + bodyHeight,
    },
    size: {
      width: bodyWidth,
      height: bottomAxisHeight,
    },
  };
  const body = {
    pos: {
      x: leftAxis.pos.x + leftAxisWidth,
      y: paddingY,
    },
    size: {
      width: bodyWidth,
      height: bodyHeight,
    },
  };

  const xScale = scaleTime().domain(xExtent).range([0, body.size.width]);
  const yScale = scaleLinear().domain(yExtent).range([body.size.height, 0]);

  return (
    <svg
      width="100%"
      height="400"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    >
      <Translate {...body.pos}>{/* chart body omitted */}</Translate>
      <Translate {...leftAxis.pos}>
        <LeftAxis scale={yScale} {...leftAxis.size} />
      </Translate>
      <Translate {...bottomAxis.pos}>
        <BottomAxis scale={xScale} {...bottomAxis.size} />
      </Translate>
    </svg>
  );
};
