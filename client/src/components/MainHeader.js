import * as React from 'react';
import { Header, Left } from 'native-base';
import { TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function MainHeader(props) {
    const navigation = useNavigation();

    function toggleDrawer() {
        navigation.toggleDrawer();
    }
    return (
        <Header >
          <Left style={{ flex: 1}}>
          <TouchableOpacity onPress={toggleDrawer}>
          <Icon name={props.iconName} size={props.iconSize} style={{color: props.iconColor}}/>
          </TouchableOpacity>
          </Left>
        </Header>
    )
} 

