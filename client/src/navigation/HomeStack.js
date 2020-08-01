import * as React from 'react';
import {Text, Container} from 'native-base';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerItems } from '@react-navigation/drawer';
import HomeScreen from '../containers/HomeScreen';
import ProfileScreen from '../containers/ProfileScreen';
import { useDispatch } from "react-redux";
import { deleteToken } from "./../actions/auth";
import { removeStorage } from '../utils/utilsStorage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductScreen from '../containers/ProductScreen';
  
const Drawer = createDrawerNavigator();
  
export default function HomeStack() {
    const dispatch = useDispatch();

    function CustomDrawerContent(props) {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem icon={({ color, size }) => <Icon color={color} size={size} name="arrow-circle-o-right"/> } 
          label={() => <Text>Uitloggen</Text>}
            onPress={async () => { 
                dispatch(deleteToken());
                await removeStorage("token");
            }}
            style={{flex: 1, justifyContent: 'flex-end'}}
            />
        </DrawerContentScrollView>
      );
    } 

    return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props}/>} drawerContentOptions={{
        activeTintColor: '#4050b5',
        contentContainerStyle: {
            flex: 1,  flexDirection: 'column', justifyContent: 'flex-start', marginRight: 5
        }
      }}
    >
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="home"
                size={25}
                color={focused ? '#4050b5' : '#ccc'}
              />
            ),}}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen}
        options={{
            title: 'Profiel',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="user"
                size={25}
                color={focused ? '#4050b5' : '#ccc'}
                style={{marginRight: 5}}
              />
            ),}} />
            <Drawer.Screen name="Product" component={ProductScreen}
        options={{
            title: 'Producten',
            drawerIcon: ({focused, size}) => (
              <Icon
                name="tint"
                size={25}
                color={focused ? '#4050b5' : '#ccc'}
                style={{marginRight: 5}}
              />
            ),}} />
      </Drawer.Navigator>
    );
}