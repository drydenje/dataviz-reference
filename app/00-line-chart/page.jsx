import * as d3 from 'd3';
import { Button } from '@/base/components/ui/button';
import data from './weather_data.json';

async function drawLineChart() {
  console.log(data.length);

  const yAccessor = (d) => d['temperatureMax'];
  console.log('yAccessor:', yAccessor(data[0]));
  const parseDate = d3.timeParse('%Y-%m-%d');
  const xAccessor = (d) => parseDate(d['date']);
  console.log('xAccessor:', xAccessor(data[0]));
}

export default function Home() {
  drawLineChart();
  return (
    <main>
      <h1>Line Chart Example</h1>
      <Button>Click me, please</Button>
    </main>
  );
}
