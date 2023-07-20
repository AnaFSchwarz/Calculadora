import * as React from 'react';
import Interface from './componets/interface';
import {Provider} from 'react-redux';
import { Store } from './Store';

function App() {

  return (
    <>
      <Provider store = {Store}>
        <Interface/>
      </Provider>
    </>      
  );
}

export default App;
