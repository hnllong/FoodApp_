import React from 'react';
import RootStack from './navigation/StackFather';
import { Provider } from 'react-redux'
import { store } from './redux/store/index';
import HighlandsCoffee from './HighlandsCoffee';
import TabHome from './navigation/Tab/HomeTab'
const App = () => {
  return (
    // <Provider store={store}>
    //   <RootStack />
    // </Provider>
//  <HighlandsCoffee />
<TabHome />
  );
}

export default App;