import * as React from 'react';
import { Container, Content, Toast, Spinner } from 'native-base';
import { useSelector } from "react-redux";
import { Base64 } from 'js-base64';
import MainHeader from '../components/MainHeader'
import CardImage from './../components/CardImage';
import DataList from './../components/List';
import { filterObject, removeEmptyKeysObject } from './../utils/utilsObject';
import { axiosRequest } from './../utils/utilsAxios';

export default function ProfileScreen({ }) {
  //Local States
  const [userPersonalData, setUserPersonalData] = React.useState({});
  const [userAddressData, setUserAddressData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  //Token from redux
  const token = useSelector(state => state.auth.token);
  //Get user settings and store in the local states
  React.useEffect(() => {
    const getUserData = async () => {
      axiosRequest("POST", "http://10.0.2.2:3000/api/user/settings", { token: Base64.encode(token) }).then((response) => {
        if (response.data.status === "success") {
          //Set the personal values
          const allowed = ['name', 'email', 'mainphone'];
          const personalData = filterObject(response.data.message, allowed);
          //Set the adress values
          const tempData = response.data.message.address;
          const addressData = removeEmptyKeysObject(tempData);
          //Set values to state
          setUserPersonalData(personalData);
          setUserAddressData(addressData);
          //Set loading
          setIsLoading(false);
        } else if (response.data.status === "error") {
          Toast.show({
            text: `Foutmelding: ${response.data.message}`,
            type: "warning"
          })
        }
      }).catch((error) => {
        console.log(error);
      })
    }
    getUserData();
  }, [])

  return (
    <Container>
      <MainHeader iconName="list" iconSize={25} iconColor="white" />
      {isLoading ? <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Spinner color='blue' /></Content> : <Content>
        <CardImage imagePath={require("./../assets/images/default_avatar.jpg")} imageStyle={{ height: 100, width: 100 }} />
        <DataList listItemHeader="Persoonlijke Gegevens" list={userPersonalData} />
        <DataList listItemHeader="Adres Gegevens" list={userAddressData} />
      </Content>}
    </Container>
  );
}