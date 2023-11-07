export default function calcProgressBar(
   totalPrice: number,
   freeShopping: number
): string {
   const percentage = (totalPrice / freeShopping) * 100;
   return `${percentage.toFixed(2)}%`;
}
