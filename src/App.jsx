import { useState } from 'react'
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { InputBox } from './components/index'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('lkr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: 'url(https://www.moneydigest.com/img/gallery/heres-how-much-money-really-exists-in-the-world/l-intro-1704559079.jpg)'}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form 
          className='text-center'
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1 text-left'>
              <InputBox
              label="from"
              amount = {amount.toFixed(2)}
              currencyOptions = {options}
              onCurrencyChange = {(currency) => setFrom(currency)}
              onAmountChange = {(amount) => setAmount(amount)}
              selectedCurrency = {from}
              
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer'
              onClick={swap}
              >
                Swap
              </button>

            </div>
            <div className='w-full mb-1 text-left'>
              <InputBox
              label="to"
              amount = {convertedAmount.toFixed(2)}
              currencyOptions = {options}
              onCurrencyChange = {(currency) => setTo(currency)}
              amountDisabled = {true}
              selectedCurrency={to}
              />
            </div>
            <button
            type='submit'
            className='w-2/4 bg-blue-600 text-white px-4 py-3 mt-3 rounded-lg cursor-pointer'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default App
