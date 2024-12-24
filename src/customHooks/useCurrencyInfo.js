import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            
            setData(res[currency])
        })
        
    }, [currency])
    
    return data
}

export default useCurrencyInfo;
