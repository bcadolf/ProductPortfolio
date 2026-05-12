import Link from 'next/link';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header>
      <Link href='/'>Product Portfolio</Link>
      <NavBar />
    </header>
  );
}
