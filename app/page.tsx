import Link from 'next/link';
// import { Button } from '@/base/components/ui/button';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      {/* <Button>Click me, please</Button> */}
      <Link
        href="https://observablehq.com/@d3/zoom-to-bounding-box?collection=@d3/d3-zoom"
        className="underline"
      >
        Zoom to bounding box
      </Link>
    </main>
  );
}
