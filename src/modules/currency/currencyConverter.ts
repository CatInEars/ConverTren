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
    if (item.CharCode === currency) inputCurrencyValue = item.Value / item.Nominal;
    if (item.CharCode === outputCurrency) outputCurrencyValue = item.Value / item.Nominal;
  });

  return +((inputCurrencyValue/outputCurrencyValue) * count).toFixed(2);
}