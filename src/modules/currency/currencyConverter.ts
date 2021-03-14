export function currencyConverter({ 
  inputCurrency: { 
    currency, 
    count
  },
  outputCurrency,
  currencyData
}: IConvertArgs): number {
  let inputCurrencyValue = 1; 
  let outputCurrencyValue = 1;

  currencyData.map( item => {
    if (item.CharCode === currency) inputCurrencyValue = item.Value;
    if (item.CharCode === outputCurrency) outputCurrencyValue = item.Value;
  });

  return +((inputCurrencyValue/outputCurrencyValue) * count).toFixed(2);
}