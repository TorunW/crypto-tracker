import { useState } from 'react';
import TradingValue from './TradingValue';
import styles from '../styles/Home.module.css';

const TradingPairs = ({ TradingPairsData }) => {
  const [urlName, setUrlName] = useState(null);

  let tradingPairsDisplay = TradingPairsData.map((pair, index) => {
    return (
      <div key={index}>
        <button
          className={
            urlName && urlName === pair.url_symbol ? styles.active : styles.btn
          }
          onClick={(e) => setUrlName(pair.url_symbol)}
        >
          {pair.name}
        </button>
      </div>
    );
  });

  return (
    <div className={styles.tradingPairsContainer}>
      <div className={styles.btnContainer}>{tradingPairsDisplay}</div>

      <TradingValue urlName={urlName} />
    </div>
  );
};

export default TradingPairs;
