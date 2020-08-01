import * as React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left,} from 'native-base';
import { StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';

export default function HomeScreen () {
        return (
            <Container styles={styles}>
              <MainHeader iconName="list" iconSize={25} iconColor="white"/>
               <Content>
          <Card>
            <CardItem>
              <Left style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Puur en Natuur</Text>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Image source = {require('./../assets/images/home_card.jpeg')} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
       
            </Container>
          );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },

    red: {
      color: 'red',
    }
  });