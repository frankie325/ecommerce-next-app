import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product';

export default async function Home() {
  const products = await getLatestProducts();

  return (
    <div>
      <ProductList data={products} title="Newest Arrivals"></ProductList>
    </div>
  );
}
