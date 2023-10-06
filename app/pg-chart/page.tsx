'use client';

import { Chart } from './Chart';
import d from './weather_data.json';

const Page = () => {
  return (
    <div>
      <Chart data={d} />
    </div>
  );
};

export default Page;
