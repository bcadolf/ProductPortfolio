import Link from 'next/link';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className='flex m-1 p-5 border-t-2 border-[#104b9e]'>
      <div>
        <Link href='#'>About</Link>
        <Link href='#'>Contact</Link>
        <Link href='#'>Privacy Policy</Link>
        <Link href='#'>Terms and Conditions</Link>
      </div>
      <div>&copy; {year}. A Brandon Adolf project. Add license info etc. </div>
    </footer>
  );
}
