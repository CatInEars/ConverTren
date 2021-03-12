import { needValute } from "./needValute";

export function getCurrencyArr(json: any): ICurrencyItem[] {
  const currencyArr = [];
  
  currencyArr.push({
    CharCode: 'RUB',
    ID: '',
    Name: 'Рубль',
    Nominal: 50,
    NumCode: '',
    Previous: 0,
    Value: 1
  });

  for (let i = 0; i < needValute.length; i++) {
    currencyArr.push(json.Valute[needValute[i]])
  }

  return currencyArr
}