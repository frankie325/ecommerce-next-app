import Header from '@/components/shared/header';
import Footer from '@/components/footer';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen flex-col">
      <Header></Header>
      <main className="flex-1 wrapper">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
