import { useEffect, useState } from 'react';
import GjNumbersView from './GjNumbersView';

const TradingValue = (props) => {
  const [tradingValueData, setTradingValueData] = useState();

  useEffect(() => {
    if (props.urlName && props.urlName !== null) {
      getTradingValues();
    }
  }, [props.urlName]);

  const getTradingValues = async () => {
    const res = await fetch(
      `https://www.bitstamp.net/api/v2/ticker/${props.urlName}`,
      { method: 'POST' }
    );
    setTradingValueData(await res.json());
  };

  // const tradingValueArray = [{ ...tradingValueData }];
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
