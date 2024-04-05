import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import bhaskara from './pages/bhaskara';
import Home from './pages/Home';
import dif from './pages/dif';
import sum from './pages/sum';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Bhaskara" component={bhaskara}  options={{ headerShown: false }} />
        <Tab.Screen name="Squares difference" component={dif} options={{ headerShown: false }} />
        <Tab.Screen name="Sum's square" component={sum} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}