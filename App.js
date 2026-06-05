import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TransactionDetailScreen from './src/screens/TransactionDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash"            component={SplashScreen} />
          <Stack.Screen name="Onboarding"        component={OnboardingScreen} />
          <Stack.Screen name="Home"              component={HomeScreen} />
          <Stack.Screen name="Statistics"        component={StatisticsScreen} />
          <Stack.Screen name="AddExpense"        component={AddExpenseScreen} />
          <Stack.Screen name="Profile"           component={ProfileScreen} />
          <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}