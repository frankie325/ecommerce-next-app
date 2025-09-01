import Image from 'next/image';
import loader from '@/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div className="flex-center w-screen h-screen">
      <Image src={loader} width={150} height={150} alt="Loading..."></Image>
    </div>
  );
};

export default LoadingPage;
