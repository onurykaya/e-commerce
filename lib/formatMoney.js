export const formatMoney = (amount = 0) => {
  const options = {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  };

  // check if its a clean amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('tr-TR', options);
  return formatter.format(amount / 100);
};
