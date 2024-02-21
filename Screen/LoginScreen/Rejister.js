import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  Keyboard,
} from 'react-native';


import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginSVG from '../../Image/ImageScreen/login3.png';
import GoogleSVG from '../../Image/ImageScreen/google.png';
import FacebookSVG from '../../Image/ImageScreen/facebook.png';
import TwitterSVG from '../../Image/ImageScreen/twitter.png';
import InputField from '../../Navigation/InputField';
import CustomButton from '../../Navigation/CustomDrawer';
import Loader from '../../Navigation/Loading';


const RegisterScreen = ({navigation}) => {

 const [date ,setDate] = useState(new Date());
 const [mode ,setMode] = useState('date');
 const [show ,setShow] = useState(false);
 const [textS ,setTextS] = useState('date of Birth');

 //pour reccupere les donne de utilisateur
 const [inputs, setInputs] = useState({
  fullname: '',
  email:'',
  password: '',
  confpassword:'',
});

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

const validate = () => {
  Keyboard.dismiss();
  let isValid = true;

  if (!inputs.email) {
    handleError('Please input email', 'email');
    isValid = false;
  } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
    handleError('Please input a valid email', 'email');
    isValid = false;
  }

  if (!inputs.fullname) {
    handleError('Please input fullname', 'fullname');
    isValid = false;
  }

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

const register = () => {
  setLoading(true);
  setTimeout(() => {
    try {
      setLoading(false);
      register1();
      setTimeout(()=>{
        navigation.navigate('Login');
       },2000);
      
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  }, 3000);
};

const onChange =(event,selectedDate) =>{
  const currentDate = selectedDate || date ;
  setShow(Platform.OS==='ios');
  setDate(currentDate);
  let tempDate = new Date(currentDate);
  let fDate = tempDate.getDate() +'/'+(tempDate.getMonth() + 1) +'/'+tempDate.getFullYear();
  setTextS(fDate);
}


const showMode = (currentMode)=>{
  setShow(true);
  setMode(currentMode);
}


const register1 = () =>{
  var url = "http://192.168.8.122/Mapp/data.php";
  var headers = {
    'Accept' :'application/json',
    'Content-Type' :'application.json'
  };
  var Data = {
      name:inputs.fullname,
      email:inputs.email,
      password:inputs.password,
      confirmpassword:inputs.confpassword,
      date:textS
  };
  fetch(
    url,
    {
      method:'POST',
      headers:headers,
      body:JSON.stringify(Data)
    }
  ).then((response) => response.json())
   .then((response)=>
   {
    Alert.alert("Message",response[0].Message);
   }).catch((error) =>
   {
    alert('error + ' + error);
   })
}





const handleOnchange = (text, input) => {
  setInputs(prevState => ({...prevState, [input]: text}));
};
const handleError = (error, input) => {
  setErrors(prevState => ({...prevState, [input]: error}));
};


  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Loader visible={loading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
          
        <View style={{alignItems: 'center'}}>

        <Image source = {LoginSVG}
              style={{ width:180, height:130,marginTop:40}}
            />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
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

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or,  Register width email ...
        </Text>

        <InputField
         onChangeText={text => handleOnchange(text, 'fullname')}
         onFocus={() => handleError(null, 'fullname')}
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
         // onChangeText={textname}
         error={errors.fullname}
        />

        <InputField
         onChangeText={text => handleOnchange(text, 'email')}
         onFocus={() => handleError(null, 'email')}
          label={'Email Adress'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        // onChangeText={textemail}
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

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={()=>showMode('date')}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {textS}
            </Text>
          </TouchableOpacity>
        </View>

        {show && (
            <DateTimePicker
            testID='DateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}     
            />
          )}

       
        

        <CustomButton label={'Register'} onPress={validate} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Connection</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default RegisterScreen;