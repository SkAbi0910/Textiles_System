// Convert cartData object → flat array
export const selectCartItems = (state) => {
  const cartData = state.cart.cartData || {};

  return Object.entries(cartData).flatMap(([productId, variants]) =>
    Object.values(variants).map((item) => ({
      productId,
      ...item,
    }))
  );
};

export const selectCartCount = (state) =>
  selectCartItems(state).reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartAmount = (state) =>
  selectCartItems(state).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
