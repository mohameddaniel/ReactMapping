import * as React from 'react';
import FournisseurScreen from './Fourniseur';
import SupermarcheScreen from './Supermarche';
import DistributeurScreen from './Distribiteur';
import ConsommateurScreen from './Consomateur';
import SettingsScreen from './Setting';
import CustomDrawer from '../Navigation/CustomButton';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

//import { Dimensions } from 'react-native';


const Stack = createDrawerNavigator();
//const windowWidth = Dimensions.get('window').width;
  export default function Screenmaison()
  {
    const navigation = useNavigation();
    const openDrawer = () => {
    navigation.openDrawer();
     };
    return(
        <Stack.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{   
          headerShown:true,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
        }}>
      

<Stack.Screen name="Supplier"
           component={FournisseurScreen} 
           options={{
            drawerLabel: 'Supplier',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="flight" color={color} size={size} />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
           />

<Stack.Screen name="Distributer"
           component={DistributeurScreen} 
           options={{
            drawerLabel: 'Distributer',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="train" color={color} size={size} />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
           />

<Stack.Screen name="Supermarket" 
          component={SupermarcheScreen}
          options={{
            drawerLabel: 'Supermarket',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="storefront" color={color} size={size} />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
          />

<Stack.Screen name="Consumer" 
          component={ConsommateurScreen}
          options={{
            drawerLabel: 'consumer',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="face" color={color} size={size} />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
          />


<Stack.Screen name="Settings" 
          component={SettingsScreen}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
          />
        </Stack.Navigator>
    )
  }