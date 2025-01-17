export default function formatPrice(value: number) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  })
    .format(value)
    .replace('₩', '');
}
