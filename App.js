import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './app/config/colors';
import Aa from './app/screens/AuthScreen';
import Bb from './app/screens/ProfileScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <NavigationContainer initialRouteName="Auth">
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={Aa}
            options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Bb}
            options={{ headerShown: false }} />
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