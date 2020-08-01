import * as React from 'react';
import { List, ListItem, Left, Text } from 'native-base';
import DataListItem from './ListItem';

export default function DataList(props) {
    const items = props.list;

    return (
        <List>
            <ListItem style={{flex: 1, flexDirection: 'row'}} itemDivider>
              <Text  style={{fontWeight: "bold"}}>{props.listItemHeader}</Text>
            </ListItem>                   
            { Object.keys(items).map((key) => (<DataListItem itemValue={items[key]}/>)) }      
          </List>
    )
}