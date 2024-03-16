import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount1, setAmount1] = useState(''); // given amount
  const [amount2, setAmount2] = useState(''); // converted amount
  const [currency1, setCurrency1] = useState("USD"); // from currency
  const [currency2, setCurrency2] = useState("INR"); // to currency

  const conversionRates = useCurrencyInfo(currency1);
  const currencyOptions = Object.keys(conversionRates);

  const convert = () => {
    if (amount1 !== '') setAmount2(amount1 * conversionRates[currency2]);
  }

  const swap = () => {
    setCurrency1(currency2);
    setCurrency2(currency1);
  }

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.3790.13746602931236419.ec145616-d3b2-4fef-b955-55708f912cfd.44b1adcc-6220-448a-ada7-ec31717c5e62?mode=scale&q=90&h=1080&w=1920')`
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300  rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              convert();
            }}
          >

            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount1}
                onAmountChange={amount => setAmount1(amount)}
                onCurrencyChange={currency => setCurrency1(currency)}
                currencyOptions={currencyOptions}
                selectedCurrency={currency1}
              />
            </div>

            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 duration-200 hover:bg-blue-700"
              onClick={swap}
            >
              swap
            </button>

            <div className="w-full mt-2 mb-4">
              <InputBox
                label="To"
                amount={amount2}
                onAmountChange={amount => setAmount2(amount)}
                onCurrencyChange={currency => setCurrency2(currency)}
                currencyOptions={currencyOptions}
                selectedCurrency={currency2}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg duration-200 hover:bg-blue-700"
            >
              convert {currency1} to {currency2}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App
