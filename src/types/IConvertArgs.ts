interface IConvertArgs{
  inputCurrency: {
    currency: ICurrency,
    count: number
  },
  outputCurrency: ICurrency,
  currencyData: ICurrencyItem[]
}