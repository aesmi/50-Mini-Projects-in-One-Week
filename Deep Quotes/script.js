const quote = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')

quote.addEventListener('click', generateQuote)

generateQuote()

// USING ASYNC/AWAIT
async function generateQuote() {
  const config = {
    // API headers
    headers: {
      accept: 'application/json',
    },
  }
  // Using built in fetch module
  const res = await fetch("https://quotes.rest/qod?language=en", config).catch(err=>conosle.log(err))
  const data = await res.json()
  console.log(data);
  quote.innerHTML = `${data.contents.quotes[0].quote}\n, ${data.contents.quotes[0].author}`
}
