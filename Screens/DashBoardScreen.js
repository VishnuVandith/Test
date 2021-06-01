import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ChannelScreen from './ChannelScreen';
import ChatScreen from './ChatScreen';
import MeetingScreen from './MeetingScreen';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }} />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Chats', title: 'Chats' },
    { key: 'Channels', title: 'Channel' },
    {key:'Meetings',title:'Meetings+'}
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#6A2D91' }}
    />
  );
  const renderScene = ({route, jumpTo,}) =>{
    switch (route.key){
      case 'Chats':
        return <ChatScreen jumpTo={jumpTo} />
      case 'Channels':
        return <ChannelScreen jumpTo={jumpTo}/>
      case 'Meetings':
        return <MeetingScreen jumpTo={jumpTo}/>
      
    }
    
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}