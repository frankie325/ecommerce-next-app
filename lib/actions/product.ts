import { convertToPlainObject } from '@/lib/utils';
import { LATEST_PRODUCTS_LIMIT } from '../contants';
import prisma from '@/db/prisma';

// 获取产品列表
export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainObject(products);
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findFirst({
    where: { slug },
  });
  return product;
}
