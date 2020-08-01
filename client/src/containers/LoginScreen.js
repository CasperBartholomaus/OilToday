import React, { useState } from 'react';
import { Form, Item, Input, Button, Text, View, Toast} from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import { saveToken } from "./../actions/auth";
import axios from 'axios';
import { setStorage } from './../utils/utilsStorage';

export default function LoginScreen () {
        const [memberId, setMemberId] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();

        const login = async () => {
            axios({
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                url: "http://10.0.2.2:3000/api/user/login",
                data: {
                    memberId: memberId,
                    password: password,
                }
              })
              .then(function (response) {
                if(response.data.status === "success") {
                  const data = response.data.message;
                  
                  dispatch(saveToken(data));
                  setStorage("token", data);
                } else if(response.data.status === "error") {
                  Toast.show({
                    text: `Foutmelding: ${response.data.message}`,
                    type: "danger"
                  })
                }
              })
              .catch(function (error) {
                Toast.show({
                  text: `Foutmelding: Kan geen verbinding met de server maken`,
                  type: "danger"
                })
              });
        }

        return (
            <View style={styles.container}>
                    <Form style={styles.form}>
                        <Item style={styles.inputFields}>
                            <Icon name='user' size={20} style={{marginRight: 5,}}/>
                                <Input placeholder='Lidmaatschapnummer' value={memberId} underlineColorAndroid="#4050b5" onChangeText={memberId => {setMemberId(memberId)}}/>
                        </Item>
                        <Item style={styles.inputFields}>
                            <Icon name='unlock-alt' size={20} style={{marginRight: 5,}}/>
                                <Input placeholder='Wachtwoord' value={password} onChangeText={password => {setPassword(password)}} underlineColorAndroid="#4050b5" secureTextEntry={true}/>
                        </Item>
                        <Button style={styles.button} onPress={() => login()}  primary rounded>
                            <Text>Log in</Text>
                        </Button>
                </Form>
            </View>
          );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    inputFields: {
      width: 250,
      margin: 5,
    },

    form: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    button: {
      marginTop: 15,
      color: 'white',
      width: 175,
      justifyContent: 'center',
    }
});