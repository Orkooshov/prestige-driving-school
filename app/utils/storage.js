import AsyncStorage from '@react-native-async-storage/async-storage';


export async function setItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
    console.error(e)
  }
}

export async function getItem(key) {
  try {
    return await AsyncStorage.getItem(key)
    // if(value !== null) {
    //     return value;
    // }
  } catch(e) {
    console.error(e)
  }
}

export async function removeItem(key) {
  return await AsyncStorage.removeItem(key)
}

export async function clear() {
  keys = await AsyncStorage.getAllKeys()
  return await AsyncStorage.multiRemove(keys)
}