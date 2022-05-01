import { useEffect, useState } from 'react';
import GjNumbersView from './GjNumbersView';
import { useAppContext } from '../context/AppContext';

const TradingValue = (props) => {
  const [tradingValueData, setTradingValueData] = useState();
  const [appState, setAppState] = useAppContext();

  let myInterval;

  useEffect(() => {
    // when we click another btn we need to clear the interval,
    // so we dont get intervals that we don't use anymore,
    // ie the btn we have clicked previously
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    clearInterval(myInterval);
    if (props.urlSymbol && props.urlSymbol !== null) {
      // here we set the interval to run a this function every 10 seconds
      getTradingValues();
      myInterval = setInterval(getTradingValues, 10000);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [props.urlSymbol]);

  const getTradingValues = async () => {
    const res = await fetch(
      `https://www.bitstamp.net/api/v2/ticker/${props.urlSymbol}`,
      { method: 'POST' }
    );
    const response = await res.json();
    setTradingValueData(response);
    const newAppState = {
      ...appState,
      tradingValueData: {
        ...response,
        symbol: props.urlSymbol,
      },
    };
    setAppState(newAppState);
  };

  const tradingValueArray = [];
  if (tradingValueData) {
    tradingValueArray = [
      { high: tradingValueData.high },
      { last: tradingValueData.last },
      { bid: tradingValueData.bid },
      { volume: tradingValueData.volume },
      { low: tradingValueData.low },
      { ask: tradingValueData.ask },
    ];
  }

  return (
    <div>
      <GjNumbersView list={tradingValueArray} />
    </div>
  );
};

export default TradingValue;
