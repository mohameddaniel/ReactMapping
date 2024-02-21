const { View ,
    Text,
    Alert,
    Keyboard,
    TouchableOpacity,
    Image,
 } = require("react-native")
const { SafeAreaView } = require("react-native-safe-area-context")
import InputField from "../../../Navigation/InputField"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState ,useEffect} from 'react';
import CustomButton from "../../../Navigation/CustomDrawer";
import Loader from "../../../Navigation/Loading";
import FORlogin from '../../../Image/ImageScreen/foregt.png';




const ForgetScreen = ({navigation}) =>{
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({email: ''});
    const [loading, setLoading] = useState(false);


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

//testé la validalité de input email
  const validateFor = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (isValid) {
      loginIn();
    }
  };

  //faire la syn la donne saise
  
  const loginIn = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        login1In();
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };


  const login1In = () =>{
    //lien qui se trouve serveur
    var url = "http://192.168.8.122/Mapp/fordata.php";
    //les hesders
    var headers = {
      'Accept' :'application/json',
      'Content-Type' :'application.json'
    };
    //les donnes envoyer
    var data = {
        email:inputs.email
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
      if(response[0].Message == "false")
        {
           Alert.alert("Reset " ,"email not correct ,Try again");
       }else{
        navigation.navigate('Check');
       }
     }).catch((error) =>
     {
      alert('error' + error);
     })
  }





    return (

        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
             <Loader visible={loading} />
            <View  style={{paddingHorizontal: 25}}>

            <View style={{alignItems: 'center'}}>
           
           <Image source = {FORlogin}
             style={{ width:200, height:200,marginTop:-110,marginBottom:5}}
           /> 
         
         </View>

            <View>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                  }}>Enter your Email</Text>
            </View>
            <View>
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
            value={inputs.email}
            error={errors.email}
          />
            </View>

            <CustomButton label={"Valide"} onPress={validateFor} />
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text> Leave?</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}>Go back </Text>
            </TouchableOpacity>
          </View>
            </View>

        </SafeAreaView>
    )
}

 
export default ForgetScreen  ;