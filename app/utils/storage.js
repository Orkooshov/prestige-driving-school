import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeApiKey = async (value) => {
  try {
    await AsyncStorage.setItem('apiKey', value)
  } catch (e) {
    // saving error
    console.error(e)
  }
}


export const getApiKey = async () => {
  try {
    return await (await AsyncStorage.getItem('apiKey'))
    // if(value !== null) {
    //     return value;
    // }
  } catch(e) {
    console.error(e)
  }
}
