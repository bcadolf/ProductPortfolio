import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex gap-10 p-5 bg-[#104b9e]'>
      <Link href='/'>Home</Link>
      <Link href='/dashboard'>Dashboard</Link>
      <Link href='/estimates'>Estimates</Link>
    </nav>
  );
}
