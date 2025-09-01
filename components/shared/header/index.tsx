import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/contants';
import { Button } from '@/components/ui/button';
import { ShoppingCart, UserIcon } from 'lucide-react';
import ModelToggle from './model-toggle';
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src="/images/logo.png" alt={`${APP_NAME} logo `} width={48} height={48} priority={true}></Image>
            <span className="lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
          </Link>
        </div>
        <div className="space-x-2">
          <ModelToggle></ModelToggle>
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart></ShoppingCart> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserIcon></UserIcon> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
