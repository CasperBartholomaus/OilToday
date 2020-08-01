import * as React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Left, Body, Right } from 'native-base';

export default function CardImage(props) {
    return (
        <Card>
            <CardItem style={{flex: 1}}>
              <Left />
              <Body>
                <Image source = {props.imagePath} 
                       style={{
                         flex: 1,  
                         justifyContent: 'center', 
                         alignItems: 'center',
                         width: props.imageStyle.width,
                         height: props.imageStyle.height, 
                       }}
                />
              </Body>
              <Right />
            </CardItem>
          </Card>
    )
} 

