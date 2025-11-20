import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return(

        <Stack.Navigator
            initialRouteName="Screen1"
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#119567ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                    fontWeight: bold,
                },
            }}
        >
            <Stack.Screen name="Screen1" component={Screen1} options={{title:'Tela Stack 1'}}/>
            <Stack.Screen name="Screen2" component={Screen2} options={{title:'Tela Stack 2'}}/>
        </Stack.Navigator>

    )
}

export default StackNavigator;