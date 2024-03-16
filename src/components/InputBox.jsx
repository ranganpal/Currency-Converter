import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "INR",
  amountDisable = false,
  currencyDisable = false,
}) {

  const amountInputId = useId();
  const currencyInputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          className="outline-none w-full bg-transparent py-1.5"
          onChange={event => onAmountChange && onAmountChange(parseFloat(event.target.value))}
        />
      </div>
      <div className="w-1/2 text-right">
        <label
          htmlFor={currencyInputId}
          className="text-black/40 mb-2 w-full block"
        >
          Currency Type
        </label>
        <select
          id={currencyInputId}
          value={selectedCurrency}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={event => onCurrencyChange && onCurrencyChange(event.target.value)}
        >
          {
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox