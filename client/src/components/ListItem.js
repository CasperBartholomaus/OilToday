import * as React from 'react';
import {  ListItem, Left, Text } from 'native-base';

export default function DataListItem(props) {
    return (
        <ListItem >
              <Left style={{position: 'absolute'}}>
              <Text>{props.itemValue}</Text>
              </Left>
        </ListItem>
    )
}