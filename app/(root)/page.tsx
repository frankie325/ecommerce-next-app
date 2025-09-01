import { Button } from '@/components/ui/button';
import sampleData from '@/db/sample-data';
import ProductList from '@/components/shared/product/product-list';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await delay(1000);

  return (
    <div>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}></ProductList>
    </div>
  );
}
