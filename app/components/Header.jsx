import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Zion Reach Logo" width={50} height={50} />
          <h1 className="text-xl font-bold ml-3">Zion Reach</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#mission" className="text-gray-700 hover:text-blue-500">Mission</Link></li>
            <li><Link href="#vision" className="text-gray-700 hover:text-blue-500">Vision</Link></li>
            <li><Link href="#services" className="text-gray-700 hover:text-blue-500">Services</Link></li>
            <li><Link href="#contact" className="text-gray-700 hover:text-blue-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
