/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import color from 'color';
import React, {Component} from 'react';
import {View, ImageBackground, Image } from 'react-native';
import {Button, Text, Seperator,Alert,StyleSheet} from 'react-native';
import { AppRegistry, TouchableOpacity } from 'react-native';

var bg = require('./assets/megam.png');
var logo = require('./assets/logo_vero_hive.png');
export default class SplashScreen extends Component
{
  
  constructor(props){
    super(props);
    setTimeout(()=>
    {
        //LoginScreen
    },5000);
  } ;
    render()
    {
        return(
              
                <ImageBackground source={bg}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{height:'100%', width:'100%'}}
                >
                <View   style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                     <Image source={logo}   style={{height:150, width:150}}>

                     </Image>

                     <Text style={styles.italic}>Freedom to Roam</Text>


                     <Text style={{fontSize:30, fontFamily:'Roboto',color:'#fffafa'}} > MegaHoot Messenger</Text>










                </View>

                <View style={styles1.MainContainer}>

       <TouchableOpacity
          style={styles1.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => this.props.navigation.navigate('LoginScreen') }
       >

            <Text style={styles1.TextStyle}> Get Started</Text>

      </TouchableOpacity>

      </View>


              </ImageBackground>

        )}
}

const styles1 = StyleSheet.create({


    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#6A2D91',
    },

    SubmitButtonStyle: {

      marginTop:5,
      paddingTop:10,
      paddingBottom:10,
      marginLeft:25,
      marginRight:25,
      backgroundColor:'#ffffff',
      borderRadius:205,
      borderWidth: 60,
      borderColor: '#6A2D91'
    },

    TextStyle:{
        color:'#6A2D91',
        textAlign:'center',
        fontWeight:'700',
        fontFamily:'Roboto',
        fontSize:20
    }

  });
const styles = StyleSheet.create(
{
  italic:
  {
    fontStyle:'italic',
    fontFamily:'Roboto',
    fontSize:20,
    marginLeft:-10,
    color:'#fff'
  },
  
  
})