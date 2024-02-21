import React from 'react';
import {View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './const/COLORS';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  password,
  error,
  value,
  onFocus = () => {},
  ...props
 
}) {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View
    style={[
      style.inputContainer,
      {
        borderColor: error
          ? COLORS.red
          : isFocused
          ? COLORS.darkBlue
          : COLORS.light,
        alignItems: 'center',
      },
    ]}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          value={value}
          {...props}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={{flex: 1, paddingVertical: 0}}
          onChangeText={onChangeText}
          value={value}
          {...props}
        />
      )}
     
    <View >
     {error && (
        <Text style={{marginTop: 4, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>  
    {
        password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )
      }
    </View>
  );
}



const style = StyleSheet.create({
  
  inputContainer: {
    flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
  },
});