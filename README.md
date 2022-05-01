This is a project displaying various Cryptocurrency data, using Nextjs.

On the right side we have a display of the average numbers of BTC/USD on the top, and under a graph displaying the latest value of a choosen currency pair. To choose curreny pairs there's buttons on the top right side and bottom right the values will be displayed of choosen currency pair.

The values are fetched from an API using static props

The graph is from Nivo, using context creates to communicate the data from the component averageTickerValue to the graph component.

To install the app:
npm install

To deploy the app:
npm run build
npm start

To open in development:
npm run dev
