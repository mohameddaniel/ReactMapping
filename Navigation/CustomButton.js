import React , {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  const [emailuser ,setEmailuser] = useState('');
  const [fullname,setFullname] = useState('');
  
  useEffect(() => {
    login1();
  }, []);
  const login1 = () =>{
   
    //lien qui se trouve serveur
    var url = "http://192.168.8.122/Mapp/profile.php";
    //les hesders
    var headers = {
      'Accept' :'application/json',
      'Content-Type' :'application.json'
    };
    //les donnes envoyer
    fetch(
      url,
      {
      //methose utilse POST
        method:'POST',
        headers:headers
      }
      //teste sur sructure de response s'est on json ou nom
    ).then((response) => response.json())
     .then((response)=>
     {
      if(response[0].Message == "ok")
        {
         setEmailuser((response[0].email));
         setFullname(response[0].fullname);
         
          }else{
           Alert.alert("Login " ,"email not exist");
       }
     }).catch((error) =>
     {
      alert('error' + error);
     })
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../Image/map.webp')}
          style={{padding: 20}}>
          <Image
            source={require('../Image/images.jpeg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}>
            {fullname}
          </Text>
          <View style={{flexDirection: 'row'}}>
          <FontAwesome5 name="envelope" size={14} color="#fff" />
         
            <Text
              style={{
                color: '#fff',
                marginLeft: 5,
              }}>
              {emailuser}
            </Text>
           
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
             Share
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;