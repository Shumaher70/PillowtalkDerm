const progressTitle = (totalPrice: number, freeShipping: number) => {
   if (totalPrice >= freeShipping) {
      return 'free shipping!';
   } else if (totalPrice > 0 && totalPrice < freeShipping) {
      return `You are $${freeShipping - totalPrice} away from free shipping.`;
   } else {
      return 'You are $135 away from free shipping.';
   }
};

export default progressTitle;
