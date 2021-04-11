import './App.scss';
import Footer  from './components/footer/footer';
import { Header } from './components/header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './container/home';
// import { Claim } from './container/claim';
import TokenDetail  from './container/tokenDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/tokenDetails">
            <TokenDetail/>
          </Route>
          {/* <Route path="/claim">
            <Claim/>
          </Route> */}
        </Switch>
      
         <Footer/> 
      </BrowserRouter>
   
    </div>
  );
}

export default App;
