import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen"
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => 
            <Ionicons name="home-outline" size={size} color={color} /> }}/>
            <Tab.Screen name="Settings" component={SettingScreen} options={{tabBarIcon: ({color, size}) => 
            <Ionicons name="settings-outline" size={size} color={color} /> }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator; 