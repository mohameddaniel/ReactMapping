import React from "react";
import { StyleSheet,TouchableOpacity,View,Text } from "react-native";
 

export default function Button({title,onPress})
{

    return(
        <TouchableOpacity onPress={ onPress }>
            <View style = {styles.containerButton}>
                 <Text style ={styles.TextButton}>{ title }</Text>
            </View>
        </TouchableOpacity>

    );
    
}

const styles = StyleSheet.create({
    containerButton:{
        borderRadius:8,
        paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor:"#f01d71",
    
    },
    TextButton:{
        color:'black',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center',
    }
})