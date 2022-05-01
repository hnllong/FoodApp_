import React from 'react';
import RootStack from './navigation/StackFather';
import { Provider } from 'react-redux'
import { store } from './redux/store/index';
import HoangLe from './hoangle';
import PhaoHoa from './phaohoa';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
// {/* <HoangLe/> */}
//  <PhaoHoa />

  );
}

export default App;