/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import Linking, { Alert } from 'react-native';
import {View, Text, ImageBackground,Image,TextInput,StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import { AppRegistry, TouchableOpacity } from 'react-native';
import {navigation} from 'react-navigation-stack';
//import Dashboard
var logo = require('./assets/logo_vero_hive.png');


 
export default class LoginScreen extends Component
{

    render()
    {
        return(
           
            <View  
              style={{flex:1,
               justifyContent:'center', 
               alignItems:'center', 
               marginTop:-100 ,
               
               }}>
             <Text 
             style={{
                 fontSize:30,
                  fontFamily:'Roboto',
                  color:'#000000',marginBottom:30,
                   color:'#6A2D91'
                   }} > Sign in Now</Text>
          <Image source={logo} style={{height:150, width:150}}></Image>

                <Text
                style={styles3.input}>Email</Text>
          <TextInput
          
        style={styles2.input}  
       placeholder="    "
         />
       <Text
                style={styles4.input}>Password</Text>
<TextInput
secureTextEntry={true}
        style={styles2.input}  
       placeholder="   "
       />  
      <Text style={{color: 'red',marginLeft:120,marginTop:15,marginBottom:-40}}
      onPress={() => Linking.openURL('http://google.com')}>
  Forgot Password?
</Text>

      
            

            
<View >
<TouchableOpacity
   style={styles1.SubmitButtonStyle}
   activeOpacity = { .5 }
   onPress={()=> this.props.navigation.navigate('DashBoardScreen') }
                   
>

     <Text style={styles1.TextStyle}>      Sign In      </Text>
</TouchableOpacity>

</View>

</View>
        )}
}

const styles2 = StyleSheet.create({
    input: {
        position:'relative',
        top:10,
        left:-64,
        backgroundColor:'#6A2D9147',
      width:248,
      height: 40,
      marginTop:65,
      marginLeft: 130,
      borderWidth: 1.5,
      borderRadius: 10,
      fontSize:20,
      borderColor:'#ffffff'
   
//background: rgba(106, 45, 145, 0.28),

}


});


const styles3 = StyleSheet.create({
    input:{ color:'#6A2D91',
            marginLeft:-190,
            fontSize:20,
            
            marginBottom:-77,
            marginTop:10

    }
});


const styles4 = StyleSheet.create({
    input:{ 
            marginLeft:-155,
            fontSize:20,
            color:'#6A2D91',

            marginBottom:-77,
            marginTop:10

    }
});

const styles1 = StyleSheet.create({


   

    SubmitButtonStyle: {

      marginTop:70,
      width:248,
      paddingBottom:10,
      marginLeft:25,
      marginRight:25,
      backgroundColor:'#6A2D91',
      borderRadius: 205,
      borderWidth: 7.6,
      borderColor: '#6A2D91',
     
    },

    TextStyle:{
        color:'#ffffff',
        textAlign:'center',
        fontWeight:'700',
        fontFamily:'Roboto',
        fontSize:20
    }

  });
      


        
          
