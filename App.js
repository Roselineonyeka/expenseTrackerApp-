import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import TransactionDetailScreen from "./src/screens/TransactionDetailScreen";
import AppNavigator from "./navigation/AppNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Main" component={AppNavigator} />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
