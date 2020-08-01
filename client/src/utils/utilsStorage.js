import AsyncStorage from '@react-native-community/async-storage';

export const setStorage = async (key, data) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return data;
};

export const removeStorage = async (key) => {
    await AsyncStorage.removeItem(key);
}