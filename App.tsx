import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from './screen/SplashScreen';
import { Provider } from "react-redux";
import { store } from "./redux/ReduxStore";
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
