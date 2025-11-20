import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/bottom/HomeScreen";
import SettingScreen from "../screens/bottom/SettingScreen"
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator >
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => 
            <Ionicons name="home-outline" size={size} color={color} /> }}/>
            <Tab.Screen name="Settings" component={SettingScreen} options={{tabBarIcon: ({color, size}) => 
            <Ionicons name="settings-outline" size={size} color={color} /> }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#24c14d'
    }
})

export default TabNavigator; 