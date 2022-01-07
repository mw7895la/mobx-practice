import React from 'react';
//import logo from './logo.svg';
import CityList from "./city";
import StoreProvider from './context';
import Search from "./search";
import './App.css';

const App: React.FC =() => (
  /*return (
      <div className="App">
        <header className="App-header">
          <CityList/>
        </header>

      </div>
  );*/
    //App.tsx  // city.tsx // context.tsx // store.tx // search.tsx 만듬
    <StoreProvider>
        <div className="App">
            <header className="App-header">
                <Search />
                <CityList />
            </header>
        </div>
    </StoreProvider>
);

export default App;
