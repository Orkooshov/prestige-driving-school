import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import colors from '../config/colors'
import Practice from './SchedulePracticeScreen';
import Theory from './ScheduleTheoryScreen';
import Profile from './ProfileScreen'


const Tab = createBottomTabNavigator();

export const Home = () => {
  const screenOptions = ({ route }) => ({
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.dark,
    tabBarIcon: ({ color, size }) => {
      let iconName = ''
      if (route.name == 'ScheduleTheory') { iconName = 'school' }
      if (route.name == 'SchedulePractice') { iconName = 'directions-car' }
      if (route.name == 'Profile') { iconName = 'person' }
      return <Icon name={iconName} color={color} size={size} />
    }
  })

  return <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name='ScheduleTheory' component={Theory} options={{ title: 'Расписание занятий' }} />
    <Tab.Screen name='SchedulePractice' component={Practice} options={{ title: 'Расписание вождения', }} />
    <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
  </Tab.Navigator>
}

export default Home