import { PrismaClient } from '@/lib/generated/prisma/client';
import SampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: SampleData.products,
  });

  console.log('database seed success!');
}

main()

// 执行npx tsx ./db/seed.ts运行该文件，插入数据