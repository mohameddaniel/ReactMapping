import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Screen/LoginScreen/AuthApp';
export default function App(){
  

  return (
  <NavigationContainer>
        <AuthStack/> 
  </NavigationContainer>
  );
}


  