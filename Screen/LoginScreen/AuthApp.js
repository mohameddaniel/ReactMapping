import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Login';
import RegisterScreen from './Rejister';
import Screenmaison from'../Maison';
import ForgetScreen from './ForgetPassword/forgetky';
import Check from './ForgetPassword/CheckPassword';
import Header from '../../Buttons/OpenDrawer';
import HomeScreen from '../Home';
import InputScreen from './Wuser/Wuser';
import Fournisseur from '../Fourniseur';
//import HomeScreen from '../MapView';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

   <Stack.Screen name="Login" component={LoginScreen} />    
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Forget" component={ForgetScreen} />
   <Stack.Screen name="Check" component={Check} />
    < Stack.Screen name="Home1" component={Screenmaison} />
  < Stack.Screen name="Input" component={InputScreen} />

 < Stack.Screen name="Home" component={HomeScreen} />
  
    </Stack.Navigator>
  );
};

export default AuthStack;