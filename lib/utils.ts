import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// 将数字格式化为保留两位小数的字符串
export function formatNumberWithDecimal(number: number): string {
  const [int, decimal] = number.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0').slice(0, 2)}` : `${int}.00`;
}
