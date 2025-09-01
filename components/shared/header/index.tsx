import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/contants';
import Menu from './menu';
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
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
