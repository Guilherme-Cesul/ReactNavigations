import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import { History } from "@screens/History";
import { Settings } from "@screens/Settings";
import { UserProfile } from "@screens/UserProfile";
import userProfileIcon from "../assets/userProfileIcon.png";
import historyIcon from "../assets/historyIcon.png";
import settingsIcon from "../assets/settingsIcon.png";
import { Image } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

type RouteParams = {
  name: string;
};

export function TabRoutes() {
  const route = useRoute();
  const { name } = route.params as RouteParams;

  return (
    <Navigator
      initialRouteName="userProfile"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#008c4f",
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          borderRadius: 4,
          elevation: 0,
        },
      }}
    >
      <Screen
        name="Seu Perfil"
        component={UserProfile}
        initialParams={{ name }}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={userProfileIcon}
              style={{
                width: size,
                height: size,
                tintColor: focused ? "#fff" : "#cccccc",
              }}
            />
          ),
        }}
      />
      <Screen
        name="Histórico"
        component={History}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={historyIcon}
              style={{
                width: size,
                height: size,
                tintColor: focused ? "#fff" : "#cccccc",
              }}
            />
          ),
        }}
      />
      <Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={settingsIcon}
              style={{
                width: size,
                height: size,
                tintColor: focused ? "#fff" : "#cccccc",
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
}
