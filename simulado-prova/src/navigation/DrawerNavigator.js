import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(

        <Drawer.Navigator
            initialRouteName="Screen1"
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#007aff',
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                    fontWeight: bold,
                }
            }}
        >
            <Drawer.Screen name="Screen1" component={Screen1} options={{title:'Tela Drawer 1'}}/>
            <Drawer.Screen name="Screen2" component={Screen2} options={{title:'Tela Drawer 2'}}/>
        </Drawer.Navigator>

    )
}

export default DrawerNavigator;