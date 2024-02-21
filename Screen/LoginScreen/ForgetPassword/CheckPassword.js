import { SafeAreaView } from "react-native-safe-area-context"
import React ,{useState} from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableOpacity,
    Alert,
    Image
   
}from 'react-native';
import InputField from "../../../Navigation/InputField";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from "../../../Navigation/Loading";
import CustomButton from "../../../Navigation/CustomDrawer";
import PASImage from '../../../Image/ImageScreen/confpasswords.png';



const Check = ({navigation}) =>{
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        password: '',
        confpassword:''
      });
      const[hellouser ,setHellouser] = useState('');
      
      const register = () => {
        setLoading(true);
        setTimeout(() => {
          try {
            setLoading(false);
            UpdatePassword();
           // navigation.navigate('Login');
          } catch (error) {
            Alert.alert('Error', 'Something went wrong');
          }
        }, 3000);
      };

      const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
      
        if (!inputs.confpassword) {
          handleError('Please cnfirm password', 'confpassword');
          isValid = false;
        }else if(inputs.password != inputs.confpassword){
          handleError('Please password not the same' ,'confpassword');
          isValid = false;
        }
      
        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        } else if (inputs.password.length < 5) {
          handleError('Min password length of 5', 'password');
          isValid = false;
        }
      
        if (isValid) {
          register();
        }
      };

      const UpdatePassword = () =>{
        //lien qui se trouve serveur
        var url = "http://192.168.8.122/Mapp/Checkdata.php";
        //les hesders
        var headers = {
          'Accept' :'application/json',
          'Content-Type' :'application.json'
        };
        //les donnes envoyer
        var data = {
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
          if(response[0].Message == "erreur")
            {
               Alert.alert("Reset " ,"Messing some things ,Try again");
           }else{
          
                Alert.alert("Login","Welcome M." + response[0].fullname );
                navigation.navigate('Login');
                
           }
         }).catch((error) =>
         {
          alert('error' + error);
         })
      }
      

      
    
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
    return(

        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
             <Loader visible={loading} />
            <View   style={{paddingHorizontal: 25}}>
              <Text style={{ fontSize:25,
                             fontWeight: '500',
                             color: '#333',
                             marginTop:-120,
                                           }}>
         Welcome!
              </Text>

              <View style={{alignItems: 'center',marginBottom:30}}>
           
           <Image source = {PASImage}
             style={{ width:200, height:200}}
           />
          
         
         </View>
            <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
         Update Password
        </Text>
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
         // onChangeText={textmotpass}
          password
          error={errors.password}
           
        />

        <InputField
         onChangeText={text => handleOnchange(text, 'confpassword')}
         onFocus={() => handleError(null, 'confpassword')}
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        //  onChangeText={textconfimotpass}
          password
          error={errors.confpassword}
        />

     <CustomButton label={'Register'} onPress={validate} />

      <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text> Leave?</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Forget')}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}>Go back </Text>
            </TouchableOpacity>
          </View>  

            </View>
        </SafeAreaView>
    )
}

export default Check;