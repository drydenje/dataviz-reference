import Link from 'next/link';
// import { Button } from '@/base/components/ui/button';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      {/* <Button>Click me, please</Button> */}
      <ul>
        <li>
          <Link
            href="https://observablehq.com/@d3/zoom-to-bounding-box?collection=@d3/d3-zoom"
            className="underline"
          >
            Zoom to bounding box
          </Link>
        </li>
        <li>
          <Link
            href="https://vega.github.io/vega-lite/examples/"
            className="underline"
          >
            Vega-Lite: quickly build charts (high level library)
          </Link>
        </li>
        <li>
          State management (redux?) to store each camera transition (and tree
          data)
        </li>
      </ul>
      <ul>
        <li>What questions do you want to answer?</li>
        <li>What is the problem you are trying to solve?</li>
        <li>What decisions are you trying to make?</li>
        <li>What outcomes are you hoping for?</li>
        <li>What story do you want to tell?</li>
        <li>What tasks should the viewer be able to perform?</li>
      </ul>
      <ul>
        <li>
          <h2 className="font-medium">Marks</h2>
          <ul className="ml-2">
            <li>Point</li>
            <li>Line</li>
            <li>Area</li>
          </ul>
        </li>
        <li>
          <h2 className="font-medium">Channels</h2>
          <p>Modifiers on the marks</p>
          <ul className="ml-2">
            <li>Position</li>
            <li>Color</li>
            <li>Size</li>
            <li>Shape</li>
          </ul>
        </li>
      </ul>
      <p>Given a spreadsheet: Columns ➡️ Channels, Rows ➡️ Marks</p>
    </main>
  );
}
