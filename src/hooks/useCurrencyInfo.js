import { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/db9dd06ef07d2112693c914d/latest/${currency}`)
      .then(res => res.json())
      .then(data => setData(data.conversion_rates));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
