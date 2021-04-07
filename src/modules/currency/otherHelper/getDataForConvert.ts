export function getDataForConvert(currency1: ICurrency, currency2: ICurrency, data: any): IConvertArgs {
  return { 
    inputCurrency: { 
      currency: currency1, 
      count: 1
    },
    outputCurrency: currency2,
    currencyData: data
  }
}