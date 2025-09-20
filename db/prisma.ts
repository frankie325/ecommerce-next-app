import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@/lib/generated/prisma/client';
import ws from 'ws';

// 使neon基于websocket去查询
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });

// 使用$extend去扩展你的结果
const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          // 将Decimal类型转换为字符
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          // 将Decimal类型转换为字符
          return product.rating.toString();
        },
      },
    },
  },
});

export default prisma;
