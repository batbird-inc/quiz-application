import  AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    
  } catch (e) {
    // saving error
    console.log(" SetItem Error is :- ",e);
  }
};

export const getData = async (key) => {  
  try {
    const value = await AsyncStorage.getItem(key);
    
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    // error reading value
    console.log(" getData Error is :- ",e);
  }
  return null;
};