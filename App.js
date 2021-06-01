/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import  {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashBoardScreen';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab =createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      
    </Tab.Navigator>
  );
}
const App = createStackNavigator({
SplashScreen:{screen:SplashScreen, navigationOptions:{headerShown:false}},
LoginScreen:{screen:LoginScreen, navigationOptions:{ headerShown:'true',
title: 'MegaHoot Messenger',
headerLeft:null,
headerStyle: { backgroundColor: '#6A2D91' },
headerTitleStyle: { color: '#ffffff' , alignSelf:'center'}}
},
DashBoardScreen:{screen:DashboardScreen,navigationOptions:{
 headerShown:'true',
headerLeft:null,
 headerTitleAlign:'left',
title:'MegaHoot Messenger',
 headerStyle: { backgroundColor: '#6A2D91' },
 color:'#ffffff',
 headerTitleStyle:{color:'#ffffff'}
 


}}





});
export default createAppContainer(App);