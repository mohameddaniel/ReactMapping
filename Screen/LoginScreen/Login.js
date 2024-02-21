
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useState ,useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../../Image/ImageScreen/login1.png';
import GoogleSVG from '../../Image/ImageScreen/google.png';
import FacebookSVG from '../../Image/ImageScreen/facebook.png';
import TwitterSVG from '../../Image/ImageScreen/twitter.png';
import InputField from '../../Navigation/InputField';
import CustomButton from '../../Navigation/CustomDrawer';
import Loader from '../../Navigation/Loading';

const LoginScreen = ({navigation}) => {

  
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
 
  //test la valide de chaque input
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };



  const login = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        login1();
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };



  //fonction pour envoyer les donnes via serveur
  const login1 = () =>{
    //lien qui se trouve serveur
    var url = "http://192.168.8.122/Mapp/logindata.php";
    //les hesders
    var headers = {
      'Accept' :'application/json',
      'Content-Type' :'application.json'
    };
    //les donnes envoyer
    var data = {
        email:inputs.email,
        password:inputs.password
    };
    fetch(
      url,
      {
      //methose utilse POST
        method:'POST',
        headers:headers,
        body:JSON.stringify(data)
      }
      //teste sur sructure de response s'est on json ou nom
    ).then((response) => response.json())
     .then((response)=>
     {
      if(response[0].Message == "ok")
        {
          reset();
         Alert.alert('Login' ,'login succssuflly');
         setTimeout(()=>{
          navigation.navigate('Home');
         },2000);
           
          }else{
           Alert.alert("Login " ,"email or password is not correct");
       }
     }).catch((error) =>
     {
      alert('error' + error);
     })
  }



  //fait la reinstaltion des inputs
   const reset = () =>{
    handleOnchange('','email');
    handleOnchange('','password');
   }

//pour recupere les donnes par rapport les inputs
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };


    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
         <Loader visible={loading} />
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
           
            <Image source = {LoginSVG}
              style={{ width:200, height:120}}
            />
           
          
          </View>
  
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Connection
          </Text>
  
          <InputField
            label={'Email ID'}
            icon={
              <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
            }
            keyboardType="email-address"
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            placeholder="Enter your email address"
            error={errors.email}
          />
  
  <InputField
           onChangeText={text => handleOnchange(text, 'password')}
           onFocus={() => handleError(null, 'password')}
            label={'Password'}
            icon={
              <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
            }
            inputType="password"
            error={errors.password}
            password
          />
           <TouchableOpacity onPress={() =>navigation.navigate('Forget')}>
            <Text style={{color: '#AD40AF', fontWeight: '700',marginTop:-23,paddingBottom:12}}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <CustomButton label={"Connection"} onPress={validate} />
  
          <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
            Or,  Connection with ...
          </Text>
  
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
                
              <Image source ={GoogleSVG} style={{ width:40, height:40}} />
              
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
                
              <Image source={FacebookSVG} style={{ width:40, height:40}} />
              
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}> 

              <Image source={TwitterSVG} style={{ width:40, height:40}} />
               
            </TouchableOpacity>
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>are you new on application?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;

 