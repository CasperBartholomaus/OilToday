import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/MainStack';
import { Root } from "native-base";

function App() {
  return (
    <Root>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Root>
  );
}

export default App;