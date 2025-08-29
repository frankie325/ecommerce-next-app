import { ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
