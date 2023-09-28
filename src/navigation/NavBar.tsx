import Link from 'next/link';
import { Separator } from '@/base/components/ui/separator';

const menuItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Line Chart',
    link: '/00-line-chart',
  },
  {
    text: 'Free Code Camp',
    link: '/fcc-data-viz',
  },
];

const NavBar = () => {
  return (
    <nav role="navigation" aria-label="Site Navigation">
      <ul className="flex h-10 items-center space-x-4 text-sm">
        {menuItems.map((item, index) => {
          const { text, link } = item;
          return (
            // <>
            <li className="p-10" key={index}>
              <Link href={link}>{text}</Link>
            </li>
            // <Separator orientation="vertical" />
            // </>
          );
        })}
      </ul>
      <Separator />
    </nav>
  );
};

export default NavBar;
