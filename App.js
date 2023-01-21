import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaunchPadStack from "./routes/LaunchPadStack";
import LaunchStack from "./routes/LaunchStack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SpaceX LaunchPads" component={LaunchPadStack} />
        <Stack.Screen name="SpaceX Launch" component={LaunchStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
