import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import { Ionicons } from "@expo/vector-icons";


const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(

        <BottomTab.Navigator
            initialRouteName="Screen1"
            screenOptions={({ route }) =>  ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    
                    if (route.name === 'Screen1'){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Screen2'){
                        iconName =  focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: '#e85e5eff',
                tabBarActiveTintColor: '#a66464ff',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },

            })}
        >
            <BottomTab.Screen name="Screen1" component={Screen1} options={{title:'Tela BottomTab 1'}}/>
            <BottomTab.Screen name="Screen2" component={Screen2} options={{title:'Tela BottomTab 2'}}/>
        </BottomTab.Navigator>

    )
}

export default BottomTabNavigator;