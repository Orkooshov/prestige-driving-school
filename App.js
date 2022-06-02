import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import colors from './app/config/colors';
import AuthScreen from './app/screens/AuthScreen';


const Stack = createNativeStackNavigator()

export const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Auth'>
          <Stack.Screen name="Auth" component={AuthScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App