import './App.css';
import { Route, Switch } from "react-router"
import Stake from './Pages/Stake/Stake';
import Home from './Pages/Home/Home';
import { UseWalletProvider } from 'use-wallet'

function App() {

  return (
    <UseWalletProvider
      chainId={5}
      // connectors={{
      //   // This is how connectors get configured
      //   // portis: { dAppId: 'my-dapp-id-123-xyz' },
      // }}
    >
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stake" component={Stake} />
        </Switch>
      </div>
    </UseWalletProvider>
  );
}

export default App;
