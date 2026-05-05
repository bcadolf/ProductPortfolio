import Link from 'next/link';

export default function NavBar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        background: '#eee',
      }}
    >
      <Link href='/'>Home</Link>
      <Link href='/dashboard'>Dashboard</Link>
      <Link href='/estimates'>Estimates</Link>
    </nav>
  );
}
