import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { UserProfile } from "@screens/UserProfile";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="userProfile" component={UserProfile} />
      <Screen name="tabRoutes" component={TabRoutes} />
    </Navigator>
  );
}
