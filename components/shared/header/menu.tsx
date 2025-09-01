import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import ModelToggle from './model-toggle';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex max-w-xs gap-1">
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
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical></EllipsisVertical>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
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
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
