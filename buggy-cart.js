// RISKY VALUE EXPLANATION: The "Notebook" price is a string ("1500") instead of a number. 
// It happens to work here because JavaScript automatically coerces the string to a number 
// during multiplication (*), but it is a risky practice that can cause concatenation bugs elsewhere.
const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
];

function getSubtotal(items) {
  let subtotal = 0;
  // BUG 1 FIXED: Changed '<=' to '<'. 
  // Found using DevTools Scope panel: 'i' reached index 3, which is out of bounds for an array of length 3, causing a TypeError.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty;
  }
  return subtotal;
}

function getDiscount(subtotal) {
  // BUG 2 FIXED: Flipped the condition order.
  // Found by analyzing logic: Checking '> 10000' first blocks subtotals over 20000 from ever receiving their 20% discount.
  if (subtotal > 20000) return 0.2;
  else if (subtotal > 10000) return 0.1;
  return 0;
}

function getTotal(items) {
  const subtotal = getSubtotal(items);
  const discount = getDiscount(subtotal);
  // BUG 3 FIXED: Changed subtraction formula to apply the discount rate correctly.
  // Found by checking output math: Code originally subtracted the raw decimal fraction (e.g., 0.1) instead of the actual calculated discount amount.
  const total = subtotal - (subtotal * discount);
  return total;
}

console.log("Calculated Total:", getTotal(cart));
