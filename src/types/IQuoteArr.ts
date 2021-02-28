interface IQuoteArr {
  quote: {
    [propName in ILanguage]: string
  },
  author: {
    [propName in ILanguage]: string
  }
}