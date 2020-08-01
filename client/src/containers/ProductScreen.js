import React, { useState } from 'react';
import { Image } from 'react-native';
import { useSelector } from "react-redux";
import { Container, Content, Card, CardItem, Text, Left, Picker } from 'native-base';
import { StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
import { axiosRequest } from './../utils/utilsAxios';

export default function ProductScreen() {
  const [categories, setCategories] = useState([]);

  //Token from redux
  const token = useSelector(state => state.auth.token);
  //Get user settings and store in the local states
  React.useEffect(() => {
    const getOilCategory = async () => {
      axiosRequest("POST", "http://10.0.2.2:3000/api/product/catalog", { token: Base64.encode(token) }).then((response) => {
        if (response.data.status === "success") {
           // Our country list generator for picker
   const countryList = () => {
    return( response.data.message.map( (x,i) => { 
          return( <Picker.Item label={x} key={i} value={x}  />)} ));
  }
          setCategories(countryList);
          console.log(categories);
        } else if (response.data.status === "error") {
          console.log(error);
        }
      }).catch((error) => {
        console.log(error);
      })
    }
    getOilCategory();
  }, [])

  

  return (
    <Container style={styles}>
      <MainHeader iconName="list" iconSize={25} iconColor="white" />
      <Content>
        <Picker
          selectedValue={categories}
          style={{ height: 50, width: 150 }}
        
        >
         { categories }

        </Picker>
        <Text>Product Screen</Text>
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