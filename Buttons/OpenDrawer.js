import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Constants from "expo-constants";
const Header = ({navigation}) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity  onPress={() =>navigation.navigate('Home1')}>
        <MaterialIcons name="menu" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal:10,
        paddingVertical:6,
        marginTop:25,
        batto: Constants.statusBarHeight,
  },
  menuIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
