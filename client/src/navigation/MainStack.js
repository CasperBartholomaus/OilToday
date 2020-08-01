import * as React from 'react';
import { Spinner } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Content } from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import { getStorage} from '../utils/utilsStorage';
import { saveToken } from '../actions/auth';
import SplashScreen from 'react-native-splash-screen';
import HomeStack from './HomeStack'; 
import AuthStack from './AuthStack';
import LoadingSpinner from './../components/Spinner';

const Stack = createStackNavigator();

export default function MainStack () {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
        const getToken = async () => {
            const userData = await getStorage("token");
            if(userData) {
                dispatch(saveToken(userData));
            }
            setIsLoading(false);
            SplashScreen.hide();
        }

        getToken();
    })


    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {isLoading ? <Stack.Screen name="Loading" component={LoadingSpinner} />  : token ? <Stack.Screen name="Home" component={HomeStack} /> : <Stack.Screen name="Login" component={AuthStack} />}     
        </Stack.Navigator>
    );
}